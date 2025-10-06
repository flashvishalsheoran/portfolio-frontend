import Link from 'next/link'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <FaHome />
            Go to Homepage
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

