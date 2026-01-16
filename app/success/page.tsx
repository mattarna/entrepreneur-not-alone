import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="w-20 h-20 bg-[#5EEAD4]/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-medium font-serif text-black">Thank You.</h1>
        <p className="text-lg text-black/60 font-sans">
          Your generous contribution has been received. You are helping an entrepreneur find their way back.
        </p>
        <Link 
          href="/"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-black/90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

