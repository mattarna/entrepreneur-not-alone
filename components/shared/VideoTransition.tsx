'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoTransition() {
  const [heroHeight, setHeroHeight] = useState(0)
  const [vslTop, setVslTop] = useState(0)
  const [isFixed, setIsFixed] = useState(true)

  // Calculate positions on mount and resize
  useEffect(() => {
    const updatePositions = () => {
      const heroSection = document.querySelector('section')
      const vslSection = document.getElementById('vsl-section')
      
      if (heroSection) {
        setHeroHeight(heroSection.offsetHeight)
      }
      
      if (vslSection) {
        setVslTop(vslSection.offsetTop)
      }
    }

    updatePositions()
    window.addEventListener('resize', updatePositions)
    
    // Add scroll listener to check when to switch from fixed to absolute
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = heroHeight + 150 // When video should "land" in VSL section
      
      if (scrollY >= threshold && isFixed) {
        setIsFixed(false)
      } else if (scrollY < threshold && !isFixed) {
        setIsFixed(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', updatePositions)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [heroHeight, isFixed])

  // Track scroll progress
  const { scrollY } = useScroll()

  // Calculate scroll progress (0 = start, 1 = end of transition)
  const scrollProgress = useTransform(
    scrollY,
    [heroHeight * 0.7, heroHeight + 150],
    [0, 1]
  )

  // Transform properties
  const width = useTransform(scrollProgress, [0, 1], [320, 1200])
  const height = useTransform(scrollProgress, [0, 1], [180, 675])
  const overlayOpacity = useTransform(scrollProgress, [0, 0.3], [1, 0])

  // For fixed positioning
  const bottom = useTransform(scrollProgress, [0, 1], [48, -200])
  const right = useTransform(scrollProgress, [0, 1], [24, -400])

  if (!isFixed) {
    // Video has "landed" in the VSL section - render it statically there
    return null
  }

  return (
    <motion.div
      style={{
        width,
        height,
        bottom,
        right,
      }}
      className="fixed z-50 pointer-events-auto"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
        <video 
          id="hero-vsl-video"
          className="w-full h-full object-cover" 
          muted 
          loop 
          autoPlay 
          playsInline
          controls
        >
          <source src="/images/lonliness-video.mp4" type="video/mp4" />
        </video>
        
        {/* Play Button Overlay */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/20 pointer-events-none"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 fill-white text-white ml-1" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
