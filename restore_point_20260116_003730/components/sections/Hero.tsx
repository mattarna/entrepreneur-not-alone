'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full flex flex-col">
      {/* Background Layer with placeholder color */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/images/lonliness 2.png"
          alt="Solitude"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex-1 flex flex-col px-6 md:px-12 lg:px-20 py-8">
        {/* Navigation Spacer */}
        <div className="h-24" />

        <div className="flex-1 flex flex-col justify-between max-w-[1600px] mx-auto w-full">
          {/* Headline - Centered Vertically */}
          <div className="flex-1 flex items-center">
            <div className="max-w-6xl">
              <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-medium text-white leading-[0.9] tracking-[-0.04em]">
                Bringing some
                <br />
                <span className="text-[#5EEAD4]">spring</span> to entrepreneurs
                <br />
                going through <span className="italic">winter</span>
              </h1>
            </div>
          </div>

          {/* Bottom Row - Subheadline Left, CTA Right */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12">
                <div className="max-w-2xl">
                  <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-snug tracking-tight">
                    Because no one should have to navigate the cold alone.
                    <br className="hidden md:block" />
                    Reconnect with the support you once needed, and help others bloom again.
                  </p>
                </div>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="group flex items-center gap-5 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4.5 rounded-full transition-all duration-300 shadow-2xl"
            >
              <span className="uppercase tracking-[0.25em] text-[10px] font-bold">Watch their story</span>
              <div className="w-10 h-10 bg-[#5EEAD4] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-4 h-4 fill-black text-black ml-0.5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          onClick={() => setIsVideoOpen(false)}
        >
          <button 
            className="absolute top-8 right-8 text-white/40 hover:text-white uppercase tracking-[0.3em] text-[10px] font-bold transition-colors"
          >
            Close ✕
          </button>
          <div 
            className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <video className="w-full h-full" controls autoPlay src="/videos/hero-vsl.mp4" />
          </div>
        </div>
      )}
    </section>
  )
}
