'use client'

import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col">
      {/* Background Layer with placeholder color and Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/images/lonliness-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex-1 flex flex-col px-4 md:px-12 lg:px-20 py-6 md:py-8">
        {/* Navigation Spacer */}
        <div className="h-14 md:h-24" />

        <div className="flex-1 flex flex-col justify-between max-w-[1600px] mx-auto w-full">
          {/* Headline - Pushed up on mobile, Centered on desktop */}
          <div className="flex-1 flex items-start pt-8 md:items-center md:pt-0">
            <div className="max-w-6xl">
              <h1 className="text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-white leading-[0.95] tracking-[-0.03em] font-serif">
                Bringing some
                <br />
                <span className="text-[#5EEAD4] italic">spring</span> to entrepreneurs
                <br />
                going through <span className="italic">winter</span>
              </h1>
            </div>
          </div>

          {/* Bottom Row - Subheadline Left, Video Preview Right */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-12 pb-6 md:pb-12">
                <div className="max-w-2xl">
                  <p className="text-lg md:text-2xl lg:text-3xl text-white font-light leading-snug tracking-tight font-sans">
                    Because no one should have to navigate the cold alone.
                    <br />
                    Reconnect with the support you once needed, and help others bloom again.
                  </p>
                </div>

            {/* Video Preview Box - Hidden on Mobile, Visible from tablet up */}
            <div className="hidden md:flex flex-col items-start md:items-end gap-2 w-full md:w-auto">
              <span className="uppercase tracking-[0.25em] text-[10px] font-bold text-white/70 font-sans">Watch their story</span>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative w-full max-w-[340px] aspect-video md:w-[320px] md:h-[180px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 cursor-pointer group"
                onClick={() => {
                  const vslSection = document.getElementById('vsl-section')
                  vslSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <video 
                  className="w-full h-full object-cover" 
                  muted 
                  loop 
                  autoPlay 
                  playsInline
                >
                  <source src="/images/lonliness-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
