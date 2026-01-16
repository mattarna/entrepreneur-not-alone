'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Header from '@/components/shared/Header'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Header />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5EEAD4]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-20 h-20 bg-[#5EEAD4]/20 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-[#0D9488] fill-[#0D9488]/20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-black/30 mb-8 block font-sans">
            Contribution Confirmed
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-black leading-tight tracking-tight mb-6 font-serif">
            A Circle Closed.
          </h1>
          
          <p className="text-lg md:text-xl text-black/50 font-light leading-relaxed mb-12 font-sans italic">
            Your support has reached its destination. 
            Somewhere, an entrepreneur just got the breathing room they needed 
            to keep their dream—and their community—alive.
          </p>

          <Link 
            href="/"
            className="inline-flex items-center gap-3 bg-black hover:bg-black/90 text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all active:scale-[0.98] shadow-2xl font-sans"
          >
            <span>Return Home</span>
            <span className="text-[#5EEAD4]">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Subtle bottom detail */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="h-px w-12 bg-black/10 mx-auto mb-4" />
        <p className="text-[10px] text-black/20 uppercase tracking-widest font-sans text-center">Thank you for your generosity</p>
      </div>
    </main>
  )
}
