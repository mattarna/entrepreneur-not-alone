'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

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
  const notOpacity = useTransform(manifestoProgress, [0.3, 0.6], [0.3, 0])
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
      className="relative bg-white overflow-hidden"
    >
      {/* Part 1: The Manifesto with Background */}
      <div className="relative overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          style={{ y: useTransform(manifestoProgress, [0, 1], [0, 50]) }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/desk.png"
            alt="Workspace"
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Glassmorphism Overlay - Improved for readability */}
        <div className="absolute inset-0 z-1 bg-white/65 backdrop-blur-[10px]" />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-white via-white/20 to-white/95" />

        <div ref={manifestoRef} className="relative z-10 min-h-[60vh] md:min-h-[85vh] flex items-center justify-center px-4 md:px-12 lg:px-20 py-10 md:py-24">
          <div className="max-w-[1400px] mx-auto w-full text-center flex flex-col items-center">
            
            {/* Headline Group with Staggered Reveal */}
            <div className="mb-5 md:mb-14">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[1.85rem] md:text-[4rem] lg:text-[5.5rem] font-medium leading-[1.05] tracking-[-0.04em] text-black mb-2 font-serif"
              >
                We Help Entrepreneurs
                <br />
                Find Their Way Back.
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl mx-auto"
              >
                <p className="text-lg md:text-2xl lg:text-3xl font-light leading-[1.3] tracking-tight text-black/90 font-serif italic">
                  We step in when things feel stuck,
                  <br />
                  <span className="text-[#0D9488] font-medium not-italic">and help you regain clarity, direction, and breathing room.</span>
                </p>
              </motion.div>
            </div>

            {/* Subtle Divider Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.5, ease: "circOut" }}
              className="h-px w-16 md:w-24 bg-black/10 mb-5 md:mb-14 origin-center"
            />

            {/* The "Not" statements - Moved down and styled more subtly */}
            <motion.div 
              style={{ opacity: notOpacity, y: notY, willChange: 'opacity, transform' }}
              className="mb-0"
            >
              <p className="text-base md:text-xl font-light text-black/40 tracking-tight italic flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-1 font-sans">
                <span>Not with promises.</span>
                <span>Not with theory.</span>
                <span>Not by telling you what you should have done.</span>
              </p>
            </motion.div>

            {/* Logo Icon Downside - Fused with background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-48 h-48 md:w-96 md:h-96 opacity-90 -mt-4 md:-mt-12"
            >
              <Image
                src="/images/logo without background.png"
                alt="Logo Icon"
                fill
                className="object-contain"
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Transition Label */}
      <div className="relative z-10 px-4 md:px-12 lg:px-20 py-6 md:py-10 border-t border-black/5 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em] text-black/40">
            What that looks like in practice
          </span>
        </div>
      </div>

      {/* Part 2: The Three Pillars - Sequential Editorial */}
      <div className="relative z-10 px-4 md:px-12 lg:px-20 pb-12 md:pb-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto space-y-0">

          {/* Pillar 01 */}
          <motion.div 
            style={{ opacity: pillar1Opacity }}
            className="grid grid-cols-12 gap-3 md:gap-6 py-8 md:py-12 border-t border-black/10 group"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="text-[3.5rem] md:text-[7rem] font-bold leading-none text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(0,0,0,0.15)] group-hover:[-webkit-text-stroke:1px_#5EEAD4] transition-all duration-500">
                01
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-4 flex flex-col justify-center -mt-2 md:mt-0">
              <h3 className="text-xl md:text-3xl font-medium tracking-tight text-black mb-3 md:mb-6">
                Free Guidance and Support
              </h3>
              <p className="text-base md:text-xl font-light leading-relaxed text-black/60 max-w-2xl">
                No cost. No pressure. No hidden agenda.
                <br />
                Just someone on your side when decisions feel heavy.
              </p>
            </div>
          </motion.div>

          {/* Pillar 02 */}
          <motion.div 
            style={{ opacity: pillar2Opacity }}
            className="grid grid-cols-12 gap-3 md:gap-6 py-8 md:py-12 border-t border-black/10 group"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="text-[3.5rem] md:text-[7rem] font-bold leading-none text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(0,0,0,0.15)] group-hover:[-webkit-text-stroke:1px_#5EEAD4] transition-all duration-500">
                02
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-4 flex flex-col justify-center -mt-2 md:mt-0">
              <h3 className="text-xl md:text-3xl font-medium tracking-tight text-black mb-3 md:mb-6">
                Practical Tools & Coaching
              </h3>
              <p className="text-base md:text-xl font-light leading-relaxed text-black/60 max-w-2xl">
                Support from people who&apos;ve built businesses themselves,
                <br />
                focused on real problems, not generic advice.
              </p>
            </div>
          </motion.div>

          {/* Pillar 03 */}
          <motion.div 
            style={{ opacity: pillar3Opacity }}
            className="grid grid-cols-12 gap-3 md:gap-6 py-8 md:py-12 border-t border-black/10 border-b group"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="text-[3.5rem] md:text-[7rem] font-bold leading-none text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(0,0,0,0.15)] group-hover:[-webkit-text-stroke:1px_#5EEAD4] transition-all duration-500">
                03
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-4 flex flex-col justify-center -mt-2 md:mt-0">
              <h3 className="text-xl md:text-3xl font-medium tracking-tight text-black mb-3 md:mb-6">
                One-to-One Specialist Advice
              </h3>
              <p className="text-base md:text-xl font-light leading-relaxed text-black/60 max-w-2xl">
                Tailored support for your situation, your numbers, your reality.
                <br />
                Because no two businesses (or moments) are the same.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
