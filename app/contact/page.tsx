'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@medstafflogistics.com',
      link: 'mailto:info@medstafflogistics.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: '123 Medical Plaza, Healthcare District, New York, NY 10001',
      link: 'https://maps.google.com',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      content: 'Chat with us',
      link: 'https://wa.me/1234567890',
    },
  ]

  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="Contact Us"
        description="Have questions? We're here to help. Reach out to us and we'll respond as soon as possible."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2674&auto=format&fit=crop"
        compact
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card text-center group hover:border-primary-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                  <div className="text-2xl">{info.icon}</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-primary-600 transition-colors">
                  {info.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="card animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Facility Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Your Hospital/Clinic"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="healthcare-staffing">Healthcare Staffing</option>
                    <option value="medical-logistics">Medical Logistics</option>
                    <option value="emergency-staffing">Emergency Staffing</option>
                    <option value="supply-chain">Supply Chain Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">
              We're conveniently located in the heart of the healthcare district
            </p>
          </div>
          <div className="bg-gradient-bg-light rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[16/9] md:aspect-[21/9] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our team is available 24/7 for emergency staffing and logistics needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Call Now: +1 (234) 567-890
            </a>
            <a href="https://wa.me/1234567890" className="btn-outline" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

