'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/shared/Header'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Header />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5EEAD4]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-black/30 mb-8 block font-sans">
            Error 404
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-black leading-tight tracking-tight mb-6 font-serif">
            Lost your way?
          </h1>
          
          <p className="text-lg md:text-xl text-black/50 font-light leading-relaxed mb-12 font-sans italic">
            Even the best entrepreneurs find themselves in unfamiliar territory sometimes. 
            The path isn&apos;t always clear, but the way back is always open.
          </p>

          <Link 
            href="/"
            className="inline-flex items-center gap-3 bg-black hover:bg-black/90 text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all active:scale-[0.98] shadow-2xl font-sans"
          >
            <span>Return to Clarity</span>
            <span className="text-[#5EEAD4]">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Subtle bottom detail */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="h-px w-12 bg-black/10 mx-auto mb-4" />
        <p className="text-[10px] text-black/20 uppercase tracking-widest font-sans">Entrepreneur Not Alone</p>
      </div>
    </main>
  )
}

