'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-24 w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default ScrollToTop

