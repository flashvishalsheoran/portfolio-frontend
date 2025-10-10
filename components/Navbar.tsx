'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+18575656557" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaPhone className="text-xs" />
              <span>+1 (857) 565-6557</span>
            </a>
            <a href="mailto:sahmad5@soahealthcare.net" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaEnvelope className="text-xs" />
              <span>sahmad5@soahealthcare.net</span>
            </a>
          </div>
          <div className="text-sm">
            Available 24/7 for Emergency Staffing
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-20 h-20 relative transform group-hover:scale-110 transition-transform">
                <Image
                  src="/soa-healthcare-logo.jpg"
                  alt="SOA Healthcare Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SOA Healthcare</h1>
                <p className="text-xs text-gray-600">Logistics & Consulting</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-semibold transition-colors relative group ${
                    pathname === link.path
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform transition-transform origin-left ${
                    pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
              <Link href="/contact" className="btn-primary">
                Get an Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-slide-up">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    pathname === link.path
                      ? 'bg-primary-50 text-primary-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center btn-primary"
              >
                Get an Appointment
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar

