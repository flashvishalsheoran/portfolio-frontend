import Hero from '@/components/Hero'
import Link from 'next/link'
import { 
  FaUserMd, 
  FaTruck, 
  FaClock, 
  FaPlane,
  FaBoxes, 
  FaHeartbeat,
  FaUserNurse,
  FaStethoscope,
  FaClipboardCheck,
  FaGraduationCap,
  FaBookMedical,
  FaHandsHelping,
  FaHospitalUser
} from 'react-icons/fa'

export const metadata = {
  title: 'Our Services | SOA Healthcare',
  description: 'Comprehensive healthcare logistics and consulting solutions including staffing liaison, travel coordination, research procurement, residency development, and patient advocacy.',
}

export default function ServicesPage() {
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
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Logistics Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We simplify the backend so healthcare professionals can focus on front-line care. 
              Our logistics division specializes in comprehensive coordination and support.
            </p>
          </div>

          {/* Healthcare Staffing Liaison */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaUserMd className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">A. Healthcare Staffing Liaison</h3>
                  <p className="text-gray-600 mb-4">
                    Bridging gaps between healthcare facilities and locum tenens providers.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-20">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Curating a reliable, ready-to-deploy network of clinical professionals across specialties.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Managing credentialing, onboarding, and contracts to streamline placements.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Travel & Accommodation Coordination */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaPlane className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">B. Travel & Accommodation Coordination</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive travel and lodging management for healthcare professionals, ensuring stress-free transitions to new assignments.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-20">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Negotiated corporate rates with airlines and accommodations for cost-efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">24/7 concierge-style support for last-minute changes or emergencies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Research Procurement & Supply Chain Support */}
          <div className="max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaBoxes className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">C. Research Procurement & Supply Chain Support</h3>
                  <p className="text-gray-600 mb-4">
                    Coordinating procurement and delivery of Research Use Only (RUO) products for healthcare organizations and academic institutions.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-20">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Managing vendor relations, compliance documentation, and inventory tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Providing real-time updates and alerts on shipment status and supply levels.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Consulting Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We empower both professionals and patients with high-impact, personalized consulting.
            </p>
          </div>

          {/* Residency Applicant Development */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaGraduationCap className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">A. Residency Applicant Development</h3>
                  <p className="text-gray-600 mb-4">
                    Tailored professional development plans for international and U.S. medical graduates.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-20">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Services include personal statement reviews, interview coaching, CV/resume optimization, and ERAS strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Mentorship pairings with current residents and attending physicians.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Evidence-Based Medical Literature Reviews */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaBookMedical className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">B. Evidence-Based Medical Literature Reviews</h3>
                  <p className="text-gray-600 mb-4">
                    In-depth literature research for patients with rare or complex medical conditions.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-20">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Compilation of peer-reviewed, evidence-based reports to support discussions with care providers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Support for patients seeking publication in journals to raise awareness or push for advanced care solutions.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Healthcare Accessibility Consulting */}
          <div className="max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaHandsHelping className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">C. Healthcare Accessibility Consulting</h3>
                  <p className="text-gray-600 mb-4">
                    Navigation support for patients with multiple or complex healthcare needs.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-20">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Development of personalized care access roadmaps, including provider matching, insurance coordination, and advocacy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Consulting services tailored for underserved or marginalized populations seeking equitable healthcare access.</span>
                </li>
              </ul>
            </div>
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
                Custom solutions tailored to your situation
              </p>
            </div>
            <div className="text-center animate-slide-up animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Seamless execution of our services
              </p>
            </div>
            <div className="text-center animate-slide-up animation-delay-600">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold">
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
