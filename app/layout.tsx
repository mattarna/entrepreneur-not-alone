import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Newsreader } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

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
    <html lang="en" className={`${GeistSans.variable} ${inter.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <body className="font-sans min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
