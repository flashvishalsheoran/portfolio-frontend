'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FaHome, FaRedo } from 'react-icons/fa'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-white text-5xl">!</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={reset} className="btn-primary inline-flex items-center gap-2">
            <FaRedo />
            Try Again
          </button>
          <Link href="/" className="btn-secondary inline-flex items-center gap-2">
            <FaHome />
            Go to Homepage
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-red-100 rounded-lg text-left">
            <p className="text-sm text-red-800 font-mono">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

