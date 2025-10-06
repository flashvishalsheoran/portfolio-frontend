import Hero from '@/components/Hero'
import Image from 'next/image'
import { 
  FaHospital, 
  FaClinicMedical, 
  FaUserNurse, 
  FaBriefcaseMedical,
  FaHome,
  FaFlask,
  FaProcedures,
  FaBaby
} from 'react-icons/fa'

export const metadata = {
  title: 'Industries We Serve | MedStaff Logistics',
  description: 'We serve diverse healthcare sectors including hospitals, clinics, nursing homes, and more.',
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: <FaHospital />,
      title: 'Hospitals & Medical Centers',
      description: 'Comprehensive staffing and logistics solutions for large hospitals and medical centers.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop',
      services: [
        'Full-time and temporary staffing',
        'Medical equipment logistics',
        'Supply chain management',
        'Emergency response services'
      ]
    },
    {
      icon: <FaClinicMedical />,
      title: 'Outpatient Clinics',
      description: 'Flexible staffing and supply solutions for outpatient and specialty clinics.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop',
      services: [
        'Specialized medical staff',
        'Equipment rental and delivery',
        'Inventory management',
        'Credentialing services'
      ]
    },
    {
      icon: <FaUserNurse />,
      title: 'Nursing Homes & Long-term Care',
      description: 'Dedicated staffing solutions for nursing homes and long-term care facilities.',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=2670&auto=format&fit=crop',
      services: [
        'Licensed nursing staff',
        'Certified nursing assistants',
        'Medical supply delivery',
        'Compliance management'
      ]
    },
    {
      icon: <FaBriefcaseMedical />,
      title: 'Emergency Medical Services',
      description: 'Rapid response staffing and logistics for emergency medical services.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2787&auto=format&fit=crop',
      services: [
        'Emergency medical technicians',
        'Paramedics',
        'Emergency equipment supply',
        '24/7 support services'
      ]
    },
    {
      icon: <FaHome />,
      title: 'Home Healthcare',
      description: 'Professional home healthcare staffing and medical supply delivery services.',
      image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?q=80&w=2678&auto=format&fit=crop',
      services: [
        'Home health nurses',
        'Physical therapists',
        'Medical equipment delivery',
        'Patient care coordination'
      ]
    },
    {
      icon: <FaFlask />,
      title: 'Laboratories & Diagnostic Centers',
      description: 'Specialized staffing for laboratories and diagnostic testing facilities.',
      image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?q=80&w=2670&auto=format&fit=crop',
      services: [
        'Lab technicians',
        'Pathologists',
        'Equipment calibration services',
        'Supply chain optimization'
      ]
    },
    {
      icon: <FaProcedures />,
      title: 'Surgical Centers',
      description: 'Expert staffing and logistics for ambulatory surgical centers.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop',
      services: [
        'Surgical nurses and techs',
        'Anesthesiologists',
        'Surgical equipment logistics',
        'Sterile supply management'
      ]
    },
    {
      icon: <FaBaby />,
      title: 'Pediatric Facilities',
      description: 'Specialized staffing for pediatric hospitals and children\'s healthcare facilities.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2691&auto=format&fit=crop',
      services: [
        'Pediatric nurses',
        'Child life specialists',
        'Pediatric equipment supply',
        'Family-centered care support'
      ]
    },
  ]

  return (
    <>
      <Hero
        title="Industries We Serve"
        subtitle="Healthcare Expertise"
        description="Delivering specialized solutions across diverse healthcare sectors"
        backgroundImage="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=2671&auto=format&fit=crop"
        primaryButton={{ text: 'Contact Us', href: '/contact' }}
        compact
      />

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Healthcare Sectors</h2>
            <p className="section-subtitle">
              We provide tailored solutions for every segment of the healthcare industry
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
                    <div className="text-3xl">{industry.icon}</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900">Our Services Include:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Healthcare Facilities Choose Us</h2>
            <p className="section-subtitle">
              Industry-specific expertise and proven results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">500+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Facilities</h3>
              <p className="text-gray-600">Trusted by facilities across all sectors</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">99.8%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Rate</h3>
              <p className="text-gray-600">Consistently exceeding expectations</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support Available</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partner With Industry Experts
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let us help you deliver exceptional care in your healthcare facility
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get Started Today
          </a>
        </div>
      </section>
    </>
  )
}

