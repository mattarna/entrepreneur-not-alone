'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Transform scroll progress to color values (gray to black)
  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.15, 1])
  const text2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0.15, 1])
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0.15, 1])
  const text4Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0.15, 1])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-20 md:py-48 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left Column - Label */}
        <div className="md:col-span-3">
          <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-black/40 block sticky top-32">
            The part no one talks about
          </span>
        </div>

        {/* Right Column - Text Content */}
        <div className="md:col-span-7 md:col-start-6 space-y-10 md:space-y-16">
          
          <motion.div style={{ opacity: text1Opacity }}>
            <h2 className="text-[1.4rem] md:text-[2rem] lg:text-[2.25rem] font-medium leading-[1.4] tracking-tight text-black font-serif">
              You don&apos;t struggle because you&apos;re incapable.
              <br className="hidden lg:block" />
              You struggle because, at a certain point, everything depends on you.
            </h2>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity }}>
            <p className="text-[1.4rem] md:text-[2rem] lg:text-[2.25rem] font-medium leading-[1.4] tracking-tight text-black font-serif">
              Decisions don&apos;t stop.
              Pressure doesn&apos;t turn off.
              And the space to think quietly disappears.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity }}>
            <p className="text-[1.4rem] md:text-[2rem] lg:text-[2.25rem] font-medium leading-[1.4] tracking-tight text-black font-serif">
              From the outside, it looks like you&apos;re doing fine.
              Inside, it feels like carrying the entire weight alone.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text4Opacity }}>
            <p className="text-[1.4rem] md:text-[2rem] lg:text-[2.25rem] font-medium leading-[1.4] tracking-tight text-black border-t border-black/5 pt-8 md:pt-12 font-serif italic">
              This is the part of entrepreneurship most people never see.
              And the part that hurts the most.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
