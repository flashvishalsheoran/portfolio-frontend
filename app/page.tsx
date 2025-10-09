import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import StatsSection from '@/components/StatsSection'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import Image from 'next/image'
import { FaUserMd, FaTruck, FaPlane, FaBoxes, FaGraduationCap, FaBookMedical, FaHandsHelping, FaHospital, FaClock, FaChartLine, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  const stats = [
    { number: '500', label: 'Healthcare Facilities Served', suffix: '+' },
    { number: '10', label: 'Years of Excellence', suffix: '+' },
    { number: '5000', label: 'Staff Deployed', suffix: '+' },
    { number: '99.8', label: 'Client Satisfaction', suffix: '%' },
  ]

  const services = [
    // Logistics Services
    {
      icon: <FaUserMd />,
      title: 'Healthcare Staffing Liaison',
      description: 'Bridging gaps between healthcare facilities and locum tenens providers.',
      features: [
        'Reliable network of clinical professionals',
        'Credentialing and onboarding management',
        'Streamlined placement process'
      ]
    },
    {
      icon: <FaPlane />,
      title: 'Travel & Accommodation Coordination',
      description: 'Comprehensive travel and lodging management for healthcare professionals.',
      features: [
        'Negotiated corporate rates',
        '24/7 concierge-style support',
        'Stress-free transitions'
      ]
    },
    {
      icon: <FaBoxes />,
      title: 'Research Procurement & Supply Chain',
      description: 'Coordinating procurement and delivery of Research Use Only (RUO) products.',
      features: [
        'Vendor relations management',
        'Inventory tracking',
        'Real-time shipment updates'
      ]
    },
    // Consulting Services
    {
      icon: <FaGraduationCap />,
      title: 'Residency Applicant Development',
      description: 'Tailored professional development for international and U.S. medical graduates.',
      features: [
        'Personal statement & interview coaching',
        'CV/resume optimization',
        'Mentorship pairings'
      ]
    },
    {
      icon: <FaBookMedical />,
      title: 'Evidence-Based Literature Reviews',
      description: 'In-depth literature research for patients with rare or complex conditions.',
      features: [
        'Peer-reviewed reports',
        'Care provider discussion support',
        'Publication assistance'
      ]
    },
    {
      icon: <FaHandsHelping />,
      title: 'Healthcare Accessibility Consulting',
      description: 'Navigation support for patients with complex healthcare needs.',
      features: [
        'Personalized care roadmaps',
        'Provider matching & insurance coordination',
        'Services for underserved populations'
      ]
    },
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      company: 'Central City Hospital',
      content: 'SOA Healthcare has been instrumental in coordinating our staffing needs. Their professionalism and quick response time are unmatched.',
      rating: 5,
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Residency Program Director',
      company: 'University Medical Center',
      content: 'The residency development consulting has been invaluable for our international medical graduates. Their personalized coaching truly makes a difference.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient Advocate',
      company: 'Healthcare Access Foundation',
      content: 'Outstanding service! The literature reviews and accessibility consulting have helped numerous patients navigate complex medical situations with confidence.',
      rating: 5,
    },
  ]

  const whyChooseUs = [
    {
      icon: <FaShieldAlt />,
      title: 'Trusted & Reliable',
      description: 'Over 10 years of proven excellence in healthcare logistics and consulting'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Assured',
      description: 'Evidence-based approaches and rigorous professional standards'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock availability for logistics coordination and guidance'
    },
    {
      icon: <FaChartLine />,
      title: 'Personalized Solutions',
      description: 'Tailored services that meet your unique healthcare needs'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Excellence in Healthcare Logistics & Consulting"
        subtitle="Your Trusted Partner"
        description="Delivering comprehensive healthcare logistics, staffing coordination, and professional consulting services to healthcare professionals and patients."
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
              Comprehensive logistics and consulting solutions for healthcare professionals and patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="section-title">Why Choose SOA Healthcare</h2>
            <p className="section-subtitle">
              We combine expertise, compassion, and innovation to deliver exceptional healthcare solutions
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
                Transforming Healthcare Logistics & Consulting Since 2014
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SOA Healthcare has been at the forefront of healthcare logistics, staffing coordination, and professional consulting. 
                Our commitment to excellence and innovation serves both healthcare professionals and patients, providing comprehensive 
                support from credentialing to patient advocacy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the critical nature of healthcare operations and personal medical journeys. Our services ensure 
                smooth coordination, professional development, and patient-centered care solutions.
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
            Ready to Transform Your Healthcare Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Let's discuss how we can support your healthcare logistics or consulting needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get an Appointment
            </Link>
            <Link href="/services" className="btn-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

