'use client'

import { useEffect, useState } from 'react'

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
          "group relative overflow-hidden px-6 py-3 rounded-full font-medium text-sm transition-all duration-500",
          scrolled 
            ? "bg-black text-white shadow-lg" 
            : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black"
        )}>
          <span className="relative z-10 flex items-center gap-2">
            <span className={cn(
              "w-2 h-2 rounded-full animate-pulse transition-colors duration-500",
              scrolled ? "bg-[#5EEAD4]" : "bg-[#5EEAD4]"
            )} />
            Donate
          </span>
        </button>
      </div>
    </header>
  )
}

import { cn } from '@/lib/utils'
