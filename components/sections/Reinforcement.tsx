'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Reinforcement() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Background Layer with placeholder color to prevent flash */}
      <div className="absolute inset-0 z-0 bg-white">
        <Image
          src="/images/helped 2.png"
          alt="Community support"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
          {/* Headline */}
          <h2 className="text-[1.75rem] md:text-[3rem] lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-black font-serif">
            Not Everyone Makes It Through.
            <br />
            <span className="text-[#0D9488] italic">These Did, Because Someone Stepped In.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-black font-medium max-w-2xl mx-auto leading-relaxed font-sans">
            Support isn't just a gesture. It's the difference between a story that ends and a story that continues.
          </p>

          {/* CTA */}
          <div className="pt-8 md:pt-10">
            <a 
              href="#donate"
              className="inline-flex items-center gap-3 bg-black hover:bg-black/90 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm tracking-wide transition-all active:scale-[0.98] shadow-2xl font-sans"
            >
              <span>Join the community</span>
              <span className="text-[#5EEAD4]">→</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

