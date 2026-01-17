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
      className="relative bg-white py-12 md:py-32 px-4 md:px-12 lg:px-20 min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 md:mb-8 text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-black tracking-tight font-serif">
            Watch the story
          </h2>
        </motion.div>

        {/* Video */}
        <motion.div 
          style={{ scale, opacity }}
          className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)]"
        >
          <iframe
            src="https://player.vimeo.com/video/1155528707?h=537304d62c&title=0&byline=0&portrait=0&badge=0"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Entrepreneur Not Alone VSL"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

