import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Entrepreneur Not Alone',
  description: 'Landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
