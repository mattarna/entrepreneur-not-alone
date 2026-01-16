'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function WayBack() {
  const sectionRef = useRef<HTMLElement>(null)
  const manifestoRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start end", "center center"]
  })

  // Fade out the "Not" statements as we scroll
  const notOpacity = useTransform(manifestoProgress, [0.3, 0.6], [0.15, 0])
  const notY = useTransform(manifestoProgress, [0.3, 0.6], [0, -30])
  
  // Fade in the positive statement
  const positiveOpacity = useTransform(manifestoProgress, [0.5, 0.8], [0, 1])
  const positiveY = useTransform(manifestoProgress, [0.5, 0.8], [40, 0])

  // Pillar animations
  const pillar1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0.1, 1])
  const pillar2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0.1, 1])
  const pillar3Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0.1, 1])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#FAFAFA] overflow-hidden"
    >
      {/* Part 1: The Manifesto */}
      <div ref={manifestoRef} className="min-h-[120vh] flex items-center justify-center px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-[1400px] mx-auto w-full text-center">
          
          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-medium leading-[1] tracking-[-0.03em] text-black mb-24"
          >
            We Help Entrepreneurs
            <br />
            Find Their Way Back.
          </motion.h2>

          {/* The "Not" statements - Fade out */}
          <motion.div 
            style={{ opacity: notOpacity, y: notY }}
            className="space-y-4 mb-16"
          >
            <p className="text-xl md:text-2xl font-light text-black/30 tracking-tight">Not with promises.</p>
            <p className="text-xl md:text-2xl font-light text-black/30 tracking-tight">Not with theory.</p>
            <p className="text-xl md:text-2xl font-light text-black/30 tracking-tight">And not by telling you what you should have done.</p>
          </motion.div>

          {/* The Positive Statement - Fade in */}
          <motion.div 
            style={{ opacity: positiveOpacity, y: positiveY }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] tracking-tight text-black">
              We step in when things feel stuck —
              <br />
              <span className="text-[#5EEAD4]">and help you regain clarity, direction, and breathing room.</span>
            </p>
          </motion.div>

        </div>
      </div>

      {/* Transition Label */}
      <div className="px-6 md:px-12 lg:px-20 py-16 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-black/30">
            What that looks like in practice
          </span>
        </div>
      </div>

      {/* Part 2: The Three Pillars - Sequential Editorial */}
      <div className="px-6 md:px-12 lg:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto space-y-0">

          {/* Pillar 01 */}
          <motion.div 
            style={{ opacity: pillar1Opacity }}
            className="grid grid-cols-12 gap-6 py-20 border-t border-black/10 group"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="text-[5rem] md:text-[7rem] font-extralight leading-none text-black/10 group-hover:text-[#5EEAD4]/30 transition-colors duration-500">
                01
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-4 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Free Guidance and Support
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-black/60 max-w-2xl">
                No cost. No pressure. No hidden agenda.
                <br />
                Just someone on your side when decisions feel heavy.
              </p>
            </div>
          </motion.div>

          {/* Pillar 02 */}
          <motion.div 
            style={{ opacity: pillar2Opacity }}
            className="grid grid-cols-12 gap-6 py-20 border-t border-black/10 group"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="text-[5rem] md:text-[7rem] font-extralight leading-none text-black/10 group-hover:text-[#5EEAD4]/30 transition-colors duration-500">
                02
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-4 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Practical Tools & Coaching
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-black/60 max-w-2xl">
                Support from people who've built businesses themselves —
                <br />
                focused on real problems, not generic advice.
              </p>
            </div>
          </motion.div>

          {/* Pillar 03 */}
          <motion.div 
            style={{ opacity: pillar3Opacity }}
            className="grid grid-cols-12 gap-6 py-20 border-t border-black/10 border-b group"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="text-[5rem] md:text-[7rem] font-extralight leading-none text-black/10 group-hover:text-[#5EEAD4]/30 transition-colors duration-500">
                03
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-4 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                One-to-One Specialist Advice
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-black/60 max-w-2xl">
                Tailored support for your situation, your numbers, your reality.
                <br />
                Because no two businesses — or moments — are the same.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

