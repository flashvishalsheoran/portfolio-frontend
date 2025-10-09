import Hero from '@/components/Hero'
import Link from 'next/link'
import { 
  FaUserMd, 
  FaTruck, 
  FaPlane,
  FaBoxes, 
  FaGraduationCap,
  FaBookMedical,
  FaHandsHelping,
  FaChevronRight,
  FaCheckCircle
} from 'react-icons/fa'

export const metadata = {
  title: 'Our Services | SOA Healthcare',
  description: 'Comprehensive healthcare logistics and consulting solutions including staffing liaison, travel coordination, research procurement, residency development, and patient advocacy.',
}

export default function ServicesPage() {
  const logisticsServices = [
    {
      icon: <FaUserMd />,
      title: 'Healthcare Staffing Liaison',
      description: 'Bridging gaps between healthcare facilities and locum tenens providers.',
      features: [
        'Reliable network of clinical professionals across specialties',
        'Credentialing, onboarding, and contract management',
        'Streamlined placement process'
      ]
    },
    {
      icon: <FaPlane />,
      title: 'Travel & Accommodation Coordination',
      description: 'Comprehensive travel and lodging management for healthcare professionals.',
      features: [
        'Negotiated corporate rates for cost-efficiency',
        '24/7 concierge-style support',
        'Stress-free transitions to new assignments'
      ]
    },
    {
      icon: <FaBoxes />,
      title: 'Research Procurement & Supply Chain Support',
      description: 'Coordinating procurement and delivery of Research Use Only (RUO) products.',
      features: [
        'Vendor relations and compliance documentation',
        'Inventory tracking and management',
        'Real-time shipment status updates'
      ]
    },
  ]

  const consultingServices = [
    {
      icon: <FaGraduationCap />,
      title: 'Residency Applicant Development',
      description: 'Tailored professional development for international and U.S. medical graduates.',
      features: [
        'Personal statement reviews and interview coaching',
        'CV/resume optimization and ERAS strategy',
        'Mentorship pairings with current residents and physicians'
      ]
    },
    {
      icon: <FaBookMedical />,
      title: 'Evidence-Based Medical Literature Reviews',
      description: 'In-depth literature research for patients with rare or complex conditions.',
      features: [
        'Peer-reviewed, evidence-based reports',
        'Support for care provider discussions',
        'Publication assistance for awareness and advanced care'
      ]
    },
    {
      icon: <FaHandsHelping />,
      title: 'Healthcare Accessibility Consulting',
      description: 'Navigation support for patients with complex healthcare needs.',
      features: [
        'Personalized care access roadmaps',
        'Provider matching and insurance coordination',
        'Services for underserved populations'
      ]
    },
  ]

  return (
    <>
      <Hero
        title="Comprehensive Healthcare Solutions"
        subtitle="Our Services"
        description="From logistics to consulting, we provide end-to-end solutions for healthcare professionals and patients"
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
        primaryButton={{ text: 'Get Started', href: '/contact' }}
        compact
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Services Overview</h2>
            <p className="section-subtitle">
              We simplify the backend so healthcare professionals can focus on front-line care
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Logistics Services Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 p-8 border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
                  <FaTruck className="text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Logistics Services</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive coordination and support for healthcare operations
                </p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>3 Services</span>
                  <FaChevronRight className="ml-2" />
                </div>
              </div>
            </div>

            {/* Consulting Services Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white mb-6">
                  <FaGraduationCap className="text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Consulting Services</h3>
                <p className="text-gray-600 mb-4">
                  High-impact, personalized consulting for professionals and patients
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>3 Services</span>
                  <FaChevronRight className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Services Details */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <FaTruck className="text-3xl" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Logistics Services</h2>
                <p className="text-lg text-gray-600 mt-2">Streamlining healthcare operations and coordination</p>
              </div>
            </div>

            {/* Logistics Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {logisticsServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white mb-6">
                    <div className="text-2xl">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0 text-sm" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Details */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <FaGraduationCap className="text-3xl" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Consulting Services</h2>
                <p className="text-lg text-gray-600 mt-2">Empowering professionals and patients with expert guidance</p>
              </div>
            </div>

            {/* Consulting Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white mb-6">
                    <div className="text-2xl">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              A streamlined approach to delivering excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                We understand your specific needs and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">
                Custom solutions tailored to your situation
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Seamless execution of our services
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                Ongoing support and 24/7 assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Healthcare Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can support your healthcare needs
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
