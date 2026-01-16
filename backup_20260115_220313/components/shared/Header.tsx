'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-8 md:py-10">
      <div className="flex justify-end items-center max-w-[1600px] mx-auto">
        <button className="bg-[#5EEAD4] hover:bg-[#4ed9c3] text-black px-8 py-3.5 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#5EEAD4]/10 hover:-translate-y-0.5 active:scale-95">
          Donate
        </button>
      </div>
    </header>
  )
}
