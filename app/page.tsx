import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import StatsSection from '@/components/StatsSection'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import Image from 'next/image'
import { FaUserMd, FaTruck, FaHospital, FaClock, FaChartLine, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  const stats = [
    { number: '500', label: 'Healthcare Facilities Served', suffix: '+' },
    { number: '10', label: 'Years of Excellence', suffix: '+' },
    { number: '5000', label: 'Staff Deployed', suffix: '+' },
    { number: '99.8', label: 'Client Satisfaction', suffix: '%' },
  ]

  const services = [
    {
      icon: <FaUserMd />,
      title: 'Healthcare Staffing',
      description: 'Professional medical staff recruitment including nurses, physicians, and allied health professionals.',
      features: ['Registered Nurses', 'Physicians & Specialists', 'Allied Health Professionals', 'Administrative Staff']
    },
    {
      icon: <FaTruck />,
      title: 'Medical Logistics',
      description: 'Efficient medical supply chain management and equipment delivery services.',
      features: ['Equipment Transportation', 'Temperature-Controlled Delivery', 'Real-time Tracking', 'Inventory Management']
    },
    {
      icon: <FaClock />,
      title: 'Emergency Staffing',
      description: '24/7 emergency healthcare staffing solutions for urgent requirements.',
      features: ['24/7 Availability', 'Rapid Deployment', 'Pre-screened Professionals', 'Crisis Management']
    },
    {
      icon: <FaChartLine />,
      title: 'Supply Chain Management',
      description: 'Comprehensive medical supply chain optimization and management services.',
      features: ['Demand Forecasting', 'Vendor Management', 'Cost Optimization', 'Quality Assurance']
    },
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      company: 'Central City Hospital',
      content: 'MedStaff Logistics has been instrumental in helping us maintain optimal staffing levels. Their professionalism and quick response time are unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      company: 'Regional Medical Center',
      content: 'The logistics solutions provided have streamlined our supply chain significantly. We have seen a 30% reduction in costs while improving delivery times.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'HR Director',
      company: 'Metro Health Network',
      content: 'Outstanding service! The quality of healthcare professionals they provide is consistently excellent. They truly understand our needs.',
      rating: 5,
    },
  ]

  const whyChooseUs = [
    {
      icon: <FaShieldAlt />,
      title: 'Trusted & Reliable',
      description: 'Over 10 years of proven excellence in healthcare logistics and staffing'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Assured',
      description: 'Rigorous screening and certification processes for all professionals'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock availability for emergency staffing and logistics needs'
    },
    {
      icon: <FaChartLine />,
      title: 'Cost Effective',
      description: 'Optimized solutions that reduce costs while maintaining quality'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Excellence in Healthcare Logistics & Staffing"
        subtitle="Your Trusted Partner"
        description="Delivering reliable healthcare staffing solutions and medical logistics services to hospitals and medical facilities across the nation."
        backgroundImage="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2691&auto=format&fit=crop"
        primaryButton={{ text: 'Get Started', href: '/contact' }}
        secondaryButton={{ text: 'Our Services', href: '/services' }}
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Services Section */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive healthcare logistics and staffing solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up h-full" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose MedStaff Logistics</h2>
            <p className="section-subtitle">
              We combine expertise, reliability, and innovation to deliver exceptional healthcare solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-primary-50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 transform hover:scale-110 transition-transform">
                  <div className="text-3xl">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2670&auto=format&fit=crop"
                  alt="Healthcare Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforming Healthcare Logistics Since 2014
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MedStaff Logistics has been at the forefront of healthcare staffing and logistics solutions, 
                providing unparalleled service to medical facilities nationwide. Our commitment to excellence 
                and innovation has made us a trusted partner for over 500 healthcare institutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the critical nature of healthcare operations and provide solutions that ensure 
                your facility runs smoothly, efficiently, and with the highest standards of care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                  Learn More About Us <FaArrowRight />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from healthcare professionals who trust us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Let's discuss how we can help optimize your staffing and logistics needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Request a Consultation
            </Link>
            <Link href="/careers" className="btn-outline">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

