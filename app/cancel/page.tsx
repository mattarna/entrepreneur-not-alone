'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Header from '@/components/shared/Header'

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Header />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center">
            <X className="w-10 h-10 text-black/40" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-black/30 mb-8 block font-sans">
            Process Cancelled
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-black leading-tight tracking-tight mb-6 font-serif">
            No pressure.
          </h1>
          
          <p className="text-lg md:text-xl text-black/50 font-light leading-relaxed mb-12 font-sans italic">
            The donation process was not completed and no funds were charged. 
            We understand—support is a personal choice, and it should only happen when the moment feels right for you.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="/#donate"
              className="inline-flex items-center gap-3 bg-[#5EEAD4] hover:bg-[#4fd9c3] text-black px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all active:scale-[0.98] shadow-2xl font-sans"
            >
              <span>Try Again</span>
              <span>↻</span>
            </Link>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-black/5 hover:bg-black/10 text-black px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all font-sans"
            >
              <span>Return Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
