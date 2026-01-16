'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function VSLSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black tracking-tight font-serif">
            Watch the story
          </h2>
        </motion.div>

        {/* Video */}
        <motion.div 
          style={{ scale, opacity }}
          className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)]"
        >
          <video 
            className="w-full h-full object-cover" 
            controls 
            playsInline
            poster="/images/lonliness 2.png"
          >
            <source src="/images/lonliness-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  )
}

