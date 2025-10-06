'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaPhone className="text-xs" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@medstafflogistics.com" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <FaEnvelope className="text-xs" />
              <span>info@medstafflogistics.com</span>
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
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">MS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MedStaff Logistics</h1>
                <p className="text-xs text-gray-600">Healthcare Solutions</p>
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
                Get Started
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
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar

