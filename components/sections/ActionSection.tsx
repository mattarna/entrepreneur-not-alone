'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function ActionSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(250)
  const [customAmount, setCustomAmount] = useState('')

  const amounts = [500, 250, 150, 50, 25, 10]

  return (
    <section id="donate" className="relative min-h-[85vh] md:min-h-screen w-full flex flex-col items-center justify-center py-14 md:py-40 overflow-hidden">
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

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 md:px-6 flex flex-col items-center">
        
        {/* Top Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 md:mb-12 max-w-4xl"
        >
          <h2 className="text-[1.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-white font-serif">
            If life has been generous with you,
            <br />
            <span className="text-[#5EEAD4] italic">Now it&apos;s your time to give back.</span>
          </h2>
        </motion.div>

        {/* The Donation Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[440px] bg-white rounded-3xl p-5 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
        >
          {/* Micro-copy */}
          <div className="text-center mb-6">
            <p className="text-black font-semibold text-base mb-1">Choose the impact you want to make.</p>
            <p className="text-black/40 text-sm">Every contribution matters.</p>
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
          <button 
            disabled={!selectedAmount && !customAmount}
            onClick={async () => {
              const amount = selectedAmount || Number(customAmount);
              if (!amount) return;

              try {
                const response = await fetch('/api/checkout', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ amount }),
                });
                const { url, error } = await response.json();
                if (error) throw new Error(error);

                // Redirect to Stripe Checkout
                window.location.href = url;
              } catch (err) {
                alert('Payment failed to start. Please try again.');
                console.error(err);
              }
            }}
            className="w-full bg-[#5EEAD4] hover:bg-[#4fd9c3] text-black py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Donate Now
          </button>

          <p className="text-center mt-5 text-[11px] text-black/30 font-medium">
            No overhead storytelling. Just real support.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
