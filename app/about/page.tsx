import Hero from '@/components/Hero'
import Image from 'next/image'
import { FaAward, FaHandshake, FaLightbulb, FaHeart, FaUsers, FaGlobe, FaChartLine } from 'react-icons/fa'

export const metadata = {
  title: 'About Us | MedStaff Logistics',
  description: 'Learn about our mission, values, and commitment to excellence in healthcare logistics and staffing.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Patient-Centered Care',
      description: 'Every decision we make is guided by the impact it has on patient outcomes and care quality.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from staff recruitment to logistics management.'
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'Trust and transparency are the foundation of our relationships with clients and partners.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We continuously evolve our services to meet the changing needs of the healthcare industry.'
    },
  ]

  const milestones = [
    { year: '2014', event: 'Founded MedStaff Logistics with a vision to transform healthcare staffing' },
    { year: '2016', event: 'Expanded to medical logistics and supply chain management services' },
    { year: '2018', event: 'Reached 100+ healthcare facilities served milestone' },
    { year: '2020', event: 'Launched 24/7 emergency staffing response during COVID-19 pandemic' },
    { year: '2022', event: 'Opened regional offices across 5 states' },
    { year: '2024', event: 'Serving 500+ healthcare facilities with 5000+ staff deployed' },
  ]

  const leadership = [
    {
      name: 'Dr. James Mitchell',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop',
      bio: '20+ years in healthcare management and logistics'
    },
    {
      name: 'Sarah Thompson',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2676&auto=format&fit=crop',
      bio: 'Expert in healthcare supply chain optimization'
    },
    {
      name: 'Dr. Michael Chang',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop',
      bio: 'Renowned physician with expertise in hospital operations'
    },
  ]

  return (
    <>
      <Hero
        title="About MedStaff Logistics"
        subtitle="Our Story"
        description="Transforming healthcare delivery through innovative staffing and logistics solutions"
        backgroundImage="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2728&auto=format&fit=crop"
        compact
      />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
                  <FaLightbulb className="text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide exceptional healthcare staffing and logistics solutions that empower medical facilities 
                  to deliver outstanding patient care. We strive to be the most trusted partner in healthcare operations, 
                  combining reliability, efficiency, and innovation in every service we provide.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
                  <FaGlobe className="text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading healthcare logistics and staffing provider nationwide, recognized for our 
                  commitment to excellence, innovation, and patient-centered care. We envision a future where every 
                  healthcare facility has access to the resources they need to provide exceptional care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 transform hover:scale-110 transition-transform">
                  <div className="text-3xl">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              A decade of growth, innovation, and impact in healthcare
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2 relative">
                    {index !== milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-primary-300" />
                    )}
                  </div>
                  <div className="flex-grow pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Experienced leaders dedicated to healthcare excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="card text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-primary-100">Healthcare Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</div>
                <div className="text-primary-100">Staff Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.8%</div>
                <div className="text-primary-100">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-primary-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

