'use client'

import { motion } from 'framer-motion'

export default function EmotionalClose() {
  return (
    <section className="relative bg-[#0A0A0A] py-14 md:py-40 px-4 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[1.5rem] md:text-[3rem] lg:text-[4rem] font-medium leading-[1.1] tracking-tight text-white mb-6 md:mb-12 font-serif"
        >
          Your Gift Changes More Than a Business.
        </motion.h2>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4 md:space-y-8 mb-8 md:mb-16 font-sans italic"
        >
          <p className="text-base md:text-xl text-white/50 font-light leading-relaxed">
            When a business survives,
            <br />
            it&apos;s not just numbers that stay alive.
          </p>
          
          <p className="text-base md:text-xl text-white/70 font-light leading-relaxed">
            It&apos;s the people who work there.
            <br />
            The families who depend on it.
            <br />
            The quiet stability of a community that keeps moving forward.
          </p>

          <p className="text-sm md:text-lg text-white/40 font-light leading-relaxed">
            This kind of support doesn&apos;t make headlines.
            <br />
            But it prevents collapse. It preserves dignity.
            <br />
            It gives someone the chance to keep going.
          </p>
        </motion.div>

        {/* The Three Words */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8 md:mb-16"
        >
          <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-6 font-sans">That is real impact</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#5EEAD4] font-serif">Economic.</span>
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#5EEAD4] font-serif">Social.</span>
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#5EEAD4] font-serif">Human.</span>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="#donate"
            className="inline-block bg-[#5EEAD4] hover:bg-[#4fd9c3] text-black px-8 md:px-12 py-3.5 md:py-5 rounded-full font-bold text-sm md:text-base tracking-wide transition-all active:scale-[0.98] shadow-[0_0_40px_rgba(94,234,212,0.3)] font-sans"
          >
            Donate Now
          </a>
          <p className="text-white/20 text-[10px] md:text-xs mt-4 md:mt-6 tracking-wide font-sans">
            100% goes to entrepreneur support
          </p>
        </motion.div>

      </div>
    </section>
  )
}

