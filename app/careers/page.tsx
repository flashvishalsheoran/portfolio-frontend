import Hero from '@/components/Hero'
import Link from 'next/link'
import { 
  FaUserMd, 
  FaUserNurse, 
  FaTruck, 
  FaBriefcase,
  FaHeart,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaCheckCircle
} from 'react-icons/fa'

export const metadata = {
  title: 'Careers | Join Our Team | MedStaff Logistics',
  description: 'Join our team of healthcare professionals. Explore career opportunities in healthcare staffing and logistics.',
}

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Registered Nurse - ICU',
      department: 'Healthcare Staffing',
      location: 'Multiple Locations',
      type: 'Full-time / Contract',
      description: 'Seeking experienced ICU nurses for various healthcare facilities.',
    },
    {
      title: 'Medical Logistics Coordinator',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Coordinate medical supply deliveries and manage logistics operations.',
    },
    {
      title: 'Healthcare Recruiter',
      department: 'Human Resources',
      location: 'Remote',
      type: 'Full-time',
      description: 'Source and recruit top healthcare talent for our clients.',
    },
    {
      title: 'Physician - Emergency Medicine',
      department: 'Healthcare Staffing',
      location: 'Various Locations',
      type: 'Contract',
      description: 'Board-certified emergency medicine physicians for hospital placements.',
    },
    {
      title: 'Supply Chain Analyst',
      department: 'Analytics',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Analyze and optimize healthcare supply chain operations.',
    },
    {
      title: 'Travel Nurse - Multiple Specialties',
      department: 'Healthcare Staffing',
      location: 'Nationwide',
      type: 'Contract',
      description: 'Travel nursing opportunities across various specialties.',
    },
  ]

  const benefits = [
    {
      icon: <FaHeart />,
      title: 'Competitive Compensation',
      description: 'Industry-leading pay rates and comprehensive benefits package'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Professional Development',
      description: 'Continuing education support and career advancement opportunities'
    },
    {
      icon: <FaUsers />,
      title: 'Supportive Culture',
      description: 'Collaborative environment with dedicated support team'
    },
    {
      icon: <FaChartLine />,
      title: 'Career Growth',
      description: 'Clear pathways for advancement and skill development'
    },
  ]

  const whyJoinUs = [
    'Flexible scheduling options',
    'Comprehensive health insurance',
    '401(k) retirement plan with matching',
    'Paid time off and holidays',
    'Professional liability insurance',
    'Continuing education reimbursement',
    'Employee assistance program',
    'Referral bonus program',
  ]

  return (
    <>
      <Hero
        title="Join Our Team"
        subtitle="Careers at MedStaff Logistics"
        description="Be part of a team that's transforming healthcare delivery. Explore exciting career opportunities."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
        primaryButton={{ text: 'View Open Positions', href: '#positions' }}
        compact
      />

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Join MedStaff Logistics?</h2>
            <p className="section-subtitle">
              Be part of something meaningful in healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <div className="text-3xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in taking care of our team members. Our comprehensive benefits package 
                is designed to support your professional and personal well-being.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyJoinUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">$75K+</div>
                <p className="text-gray-600">Average Salary</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
                <p className="text-gray-600">Employee Satisfaction</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">4.8★</div>
                <p className="text-gray-600">Glassdoor Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Find your next career opportunity with us
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="card group hover:border-primary-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FaBriefcase />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <FaBriefcase className="text-xs" />
                            {position.department}
                          </span>
                          <span>•</span>
                          <span>{position.location}</span>
                          <span>•</span>
                          <span className="text-primary-600 font-semibold">{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 ml-16">{position.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary whitespace-nowrap self-start md:self-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see the right position? We're always looking for talented healthcare professionals.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Submit General Application
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join our team and be part of transforming healthcare delivery
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Apply Today
          </Link>
        </div>
      </section>
    </>
  )
}

