'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-6 transition-all duration-500 ${scrolled ? 'py-4' : ''}`}>
      <div className="flex justify-end items-center max-w-[1600px] mx-auto">
        <button className={cn(
          "group relative overflow-hidden px-6 py-3 rounded-full font-bold text-sm transition-all duration-500",
          scrolled 
            ? "bg-[#5EEAD4] text-black shadow-[0_0_20px_rgba(94,234,212,0.4)] scale-105" 
            : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black"
        )}>
          <span className="relative z-10 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                scrolled ? "bg-black" : "bg-[#5EEAD4]"
              )}></span>
              <span className={cn(
                "relative inline-flex rounded-full h-2 w-2",
                scrolled ? "bg-black" : "bg-[#5EEAD4]"
              )}></span>
            </span>
            Donate
          </span>
        </button>
      </div>
    </header>
  )
}
