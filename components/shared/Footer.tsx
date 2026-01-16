'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5 py-12 md:py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Identity & Mission */}
          <div className="space-y-6">
            <div className="relative w-48 h-12">
              <Image
                src="/images/logo without background.png"
                alt="Entrepreneur Not Alone Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/40 text-sm md:text-base max-w-md font-sans leading-relaxed">
              The official international arm of <span className="text-white/60">Imprenditore Non Sei Solo</span>. 
              We are a group of entrepreneurs and professionals dedicated to supporting colleagues in difficulty through free consultation and training.
            </p>
          </div>

          {/* Right Side: Legal & Transparency */}
          <div className="space-y-8 md:text-right">
            <div>
              <h4 className="text-white/80 text-xs uppercase tracking-[0.2em] mb-4 font-sans">Legal & Transparency</h4>
              <div className="text-white/40 text-sm font-sans space-y-1">
                <p className="text-white/60 font-medium">IMPRENDITORE NON SEI SOLO ETS</p>
                <p>Via dell’Annunciata 31, 20121 - Milano, Italy</p>
                <p>P.IVA 15169751003 | C.F.: 97986790588</p>
              </div>
            </div>

            <div>
              <h4 className="text-white/80 text-xs uppercase tracking-[0.2em] mb-4 font-sans">Fund Flow</h4>
              <p className="text-white/40 text-sm font-sans max-w-sm md:ml-auto leading-relaxed">
                100% of your donation flows directly to the association&apos;s bank account via Stripe. 
                Donations are used to provide free training and support to entrepreneurs in Italy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] md:text-xs tracking-widest uppercase font-sans">
            © {currentYear} IMPRENDITORE NON SEI SOLO ETS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white/40 text-[10px] md:text-xs tracking-widest uppercase font-sans transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white/40 text-[10px] md:text-xs tracking-widest uppercase font-sans transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

