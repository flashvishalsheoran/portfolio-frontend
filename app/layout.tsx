import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Healthcare Logistics & Staffing Solutions | MedStaff Logistics',
  description: 'Professional hospital logistics and staffing services. We provide reliable healthcare staffing solutions and medical supply chain management.',
  keywords: 'healthcare logistics, hospital staffing, medical staffing, healthcare supply chain, medical logistics',
  authors: [{ name: 'MedStaff Logistics' }],
  openGraph: {
    title: 'Healthcare Logistics & Staffing Solutions',
    description: 'Professional hospital logistics and staffing services',
    type: 'website',
  },
  metadataBase: new URL('https://www.medstafflogistics.com'),
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
        <ScrollToTop />
      </body>
    </html>
  )
}

