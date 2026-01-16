'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function ActionSection() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(250)
  const [customAmount, setCustomAmount] = useState('')

  const amounts = [500, 250, 150, 50, 25, 10]

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
      {/* Background Image with Overlay and placeholder color */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/images/light.jpg"
          alt="Light and Hope"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 flex flex-col items-center">
        
        {/* Top Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-4xl"
        >
          <h2 className="text-[2.25rem] md:text-[4rem] lg:text-[5.5rem] font-medium leading-[1] tracking-[-0.02em] text-white font-serif">
            If You've Ever Been Supported:
            <br />
            <span className="text-[#5EEAD4] italic">Now Pay It Forward.</span>
          </h2>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center mb-16 max-w-xl"
        >
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
            There was likely a moment when things could have gone a different way for you.
            A decision made in time. Someone who helped you see clearly.
          </p>
        </motion.div>

        {/* The Donation Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[440px] bg-white rounded-3xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
        >
          {/* Micro-copy */}
          <div className="text-center mb-6">
            <p className="text-black font-semibold text-base mb-1">Choose the impact you want to make.</p>
            <p className="text-black/40 text-sm">One-time or monthly. Every contribution matters.</p>
          </div>

          {/* Frequency Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-xl mb-5">
            <button
              onClick={() => setFrequency('one-time')}
              className={cn(
                "flex-1 py-2.5 text-sm font-medium rounded-lg transition-all",
                frequency === 'one-time' ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black/60"
              )}
            >
              One-time
            </button>
            <button
              onClick={() => setFrequency('monthly')}
              className={cn(
                "flex-1 py-2.5 text-sm font-medium rounded-lg transition-all",
                frequency === 'monthly' ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black/60"
              )}
            >
              Monthly
            </button>
          </div>

          {/* Amount Grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-3">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount)
                  setCustomAmount('')
                }}
                className={cn(
                  "py-3.5 border rounded-xl text-base font-medium transition-all duration-200",
                  selectedAmount === amount 
                    ? "border-[#5EEAD4] bg-[#5EEAD4]/10 text-black shadow-md" 
                    : "border-gray-200 text-black/50 hover:border-black/30 hover:text-black hover:shadow-sm",
                  amount === 250 && "ring-2 ring-black/10 ring-offset-1"
                )}
              >
                ${amount}
                {amount === 250 && <span className="block text-[9px] text-black/40 font-medium mt-0.5">Most chosen</span>}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 font-medium">$</span>
            <input
              type="number"
              placeholder="Other"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount(null)
              }}
              className="w-full pl-8 pr-14 py-3.5 border border-gray-200 rounded-xl text-black placeholder:text-black/30 focus:outline-none focus:border-[#5EEAD4] transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-black/25 tracking-widest">USD</span>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-[#5EEAD4] hover:bg-[#4fd9c3] text-black py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98]">
            Continue
          </button>

          <p className="text-center mt-5 text-[11px] text-black/30 font-medium">
            No overhead storytelling. Just real support.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
