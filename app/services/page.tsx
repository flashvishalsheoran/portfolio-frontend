import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { 
  FaUserMd, 
  FaTruck, 
  FaClock, 
  FaChartLine, 
  FaBoxes, 
  FaHeartbeat,
  FaUserNurse,
  FaStethoscope,
  FaAmbulance,
  FaWarehouse,
  FaClipboardCheck,
  FaShippingFast
} from 'react-icons/fa'

export const metadata = {
  title: 'Our Services | MedStaff Logistics',
  description: 'Comprehensive healthcare staffing and logistics solutions including medical staffing, supply chain management, and emergency services.',
}

export default function ServicesPage() {
  const staffingServices = [
    {
      icon: <FaUserNurse />,
      title: 'Registered Nurses',
      description: 'Highly qualified RNs for various specialties including ICU, ER, pediatrics, and more.',
      features: ['ICU & Critical Care', 'Emergency Department', 'Surgical Units', 'Pediatric Care']
    },
    {
      icon: <FaStethoscope />,
      title: 'Physicians & Specialists',
      description: 'Board-certified physicians and medical specialists across all major disciplines.',
      features: ['Primary Care Physicians', 'Surgeons', 'Anesthesiologists', 'Specialists']
    },
    {
      icon: <FaHeartbeat />,
      title: 'Allied Health Professionals',
      description: 'Skilled allied health professionals including therapists, technicians, and support staff.',
      features: ['Physical Therapists', 'Lab Technicians', 'Radiology Techs', 'Respiratory Therapists']
    },
    {
      icon: <FaClock />,
      title: 'Emergency Staffing',
      description: '24/7 emergency staffing solutions for urgent and last-minute requirements.',
      features: ['Rapid Response', 'Pre-vetted Professionals', 'Crisis Management', 'Flexible Scheduling']
    },
  ]

  const logisticsServices = [
    {
      icon: <FaTruck />,
      title: 'Medical Equipment Transport',
      description: 'Safe and efficient transportation of medical equipment and supplies.',
      features: ['Temperature Control', 'Real-time Tracking', 'Secure Handling', 'Insurance Coverage']
    },
    {
      icon: <FaWarehouse />,
      title: 'Inventory Management',
      description: 'Comprehensive medical inventory tracking and optimization solutions.',
      features: ['Automated Tracking', 'Stock Optimization', 'Expiry Management', 'Just-in-Time Delivery']
    },
    {
      icon: <FaShippingFast />,
      title: 'Same-Day Delivery',
      description: 'Urgent medical supply delivery services for critical needs.',
      features: ['Emergency Delivery', 'Priority Handling', '24/7 Availability', 'Direct Routing']
    },
    {
      icon: <FaChartLine />,
      title: 'Supply Chain Optimization',
      description: 'Strategic supply chain consulting and optimization services.',
      features: ['Cost Reduction', 'Process Improvement', 'Vendor Management', 'Analytics & Reporting']
    },
  ]

  const additionalServices = [
    {
      icon: <FaClipboardCheck />,
      title: 'Compliance & Credentialing',
      description: 'Comprehensive credentialing and compliance management for all healthcare professionals.',
      features: ['License Verification', 'Background Checks', 'Certification Tracking', 'Compliance Audits']
    },
    {
      icon: <FaAmbulance />,
      title: 'Disaster Response',
      description: 'Specialized staffing and logistics for disaster relief and emergency situations.',
      features: ['Rapid Deployment', 'Emergency Coordination', 'Resource Management', 'Crisis Planning']
    },
  ]

  return (
    <>
      <Hero
        title="Comprehensive Healthcare Solutions"
        subtitle="Our Services"
        description="From staffing to logistics, we provide end-to-end solutions for healthcare facilities"
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
        primaryButton={{ text: 'Get Started', href: '/contact' }}
        compact
      />

      {/* Healthcare Staffing Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Healthcare Staffing Services</h2>
            <p className="section-subtitle">
              Professional medical staff recruitment and placement services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffingServices.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Logistics Services */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Medical Logistics Services</h2>
            <p className="section-subtitle">
              Efficient supply chain and transportation solutions for healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsServices.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Specialized solutions for complex healthcare challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Service Process</h2>
            <p className="section-subtitle">
              A streamlined approach to delivering excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                We understand your specific needs and requirements
              </p>
            </div>
            <div className="text-center animate-slide-up animation-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">
                Custom solutions tailored to your facility
              </p>
            </div>
            <div className="text-center animate-slide-up animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Seamless deployment of staff and resources
              </p>
            </div>
            <div className="text-center animate-slide-up animation-delay-600">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                Ongoing monitoring and 24/7 assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Healthcare Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can benefit your facility
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

