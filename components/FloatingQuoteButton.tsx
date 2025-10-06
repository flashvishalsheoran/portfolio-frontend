'use client'

import { useState } from 'react'
import { FaQuoteLeft, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

const FloatingQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group"
        aria-label="Request a Quote"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaQuoteLeft className="text-2xl group-hover:rotate-12 transition-transform" />
        )}
      </button>

      {/* Quick Action Menu */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 bg-white rounded-2xl shadow-2xl p-6 z-40 w-80 animate-slide-up">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+1234567890"
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default FloatingQuoteButton

