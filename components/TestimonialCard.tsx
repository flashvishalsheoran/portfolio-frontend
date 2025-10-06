import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

const TestimonialCard = ({ name, role, company, content, rating, image }: TestimonialCardProps) => {
  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden">
          {image ? (
            <Image src={image} alt={name} width={64} height={64} className="object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-primary-600">{company}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed italic">"{content}"</p>
    </div>
  )
}

export default TestimonialCard

