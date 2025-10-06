export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-6 animate-pulse">
          <span className="text-white font-bold text-3xl">MS</span>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

