'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Animated counter component
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / 2000, 1)
        setCount(Math.floor(progress * value))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 847, suffix: '+', label: 'Entrepreneurs Supported' },
  { value: 12, suffix: 'M+', label: 'Economic Impact Preserved' },
  { value: 215, suffix: '+', label: 'Active Volunteers' },
  { value: 2018, suffix: '', label: 'Helping Since' },
]

const testimonials = [
  {
    quote: "They didn't try to fix me. They just helped me see clearly again.",
    author: "Founder, Tech Startup",
  },
  {
    quote: "For the first time in months, I felt like someone understood the weight.",
    author: "CEO, Family Business",
  },
]

export default function Impact() {
  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-black/30">
                Proof of Impact
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h2 className="text-[2rem] md:text-[2.75rem] font-medium leading-[1.15] tracking-tight text-black">
                Real Change for Real Lives.
                <br />
                <span className="text-black/40">Trust, not pressure.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 md:px-12 lg:px-20 py-16 border-y border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center md:text-left group"
              >
                <div className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-semibold leading-none tracking-tighter text-black/90 group-hover:text-[#5EEAD4] transition-colors duration-500">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base font-medium text-black/40 mt-4 tracking-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Quote Mark */}
                <div className="absolute -top-8 -left-2 text-[8rem] leading-none font-serif text-[#5EEAD4]/20 select-none">
                  "
                </div>
                <blockquote className="relative z-10">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80 italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-6">
                    <span className="text-sm font-medium text-black/40 tracking-wide">
                      · {testimonial.author}
                    </span>
                  </footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#5EEAD4]/30 to-transparent" />

    </section>
  )
}


