import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features?: string[]
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform">
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard

