import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Healthcare Logistics & Consulting Solutions | SOA Healthcare',
  description: 'Professional healthcare logistics, staffing, and consulting services. We provide comprehensive healthcare solutions including staffing liaison, travel coordination, and medical consulting.',
  keywords: 'healthcare logistics, medical staffing, healthcare consulting, residency development, medical research, healthcare accessibility',
  authors: [{ name: 'SOA Healthcare' }],
  openGraph: {
    title: 'Healthcare Logistics & Consulting Solutions',
    description: 'Professional healthcare logistics, staffing, and consulting services',
    type: 'website',
  },
  metadataBase: new URL('https://www.soahealthcare.com'),
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingQuoteButton />
      </body>
    </html>
  )
}

