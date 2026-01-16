'use client'

import { motion } from 'framer-motion'

export default function ClosingMessage() {
  return (
    <section className="relative bg-white py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed">
              Not everyone gets that moment.
            </p>
            <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed max-w-3xl mx-auto">
              Some entrepreneurs reach the hardest point alone, with a business on their shoulders, 
              people depending on them, and no one to talk to who truly understands.
            </p>
          </div>

          <div className="h-px w-24 bg-black/10 mx-auto" />

          <div className="space-y-10">
            <p className="text-2xl md:text-3xl lg:text-5xl text-black font-medium leading-[1.2] tracking-tight max-w-5xl mx-auto font-serif">
              Your contribution doesn't fund an idea.
              <br />
              <span className="text-[#0D9488] italic">It gives time, clarity, and human guidance to someone who needs it right now.</span>
            </p>

            <p className="text-xl md:text-2xl lg:text-3xl text-black/80 font-medium leading-relaxed max-w-4xl mx-auto font-serif italic">
              Your donation today can help an entrepreneur stay in business, and keep everything they've built from falling apart.
            </p>
          </div>

        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <a 
            href="#donate"
            className="inline-flex items-center gap-3 bg-black hover:bg-black/90 text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide transition-all active:scale-[0.98]"
          >
            <span>Make a Difference</span>
            <span className="text-[#5EEAD4]">↑</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

