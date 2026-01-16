import Link from 'next/link';

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-4xl font-medium font-serif text-black">Payment Cancelled</h1>
        <p className="text-lg text-black/60 font-sans">
          The donation process was not completed. No funds have been charged.
        </p>
        <Link 
          href="/"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-black/90"
        >
          Try Again
        </Link>
      </div>
    </main>
  );
}

