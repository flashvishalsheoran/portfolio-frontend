'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/soa-healthcare-logo.jpg"
                  alt="SOA Healthcare Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">SOA Healthcare</h3>
                <p className="text-sm text-gray-400">Logistics & Consulting</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted partner in healthcare logistics, staffing, and consulting. Delivering excellence in medical coordination, professional development, and patient-centered healthcare solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Healthcare Staffing
              </li>
              <li className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Medical Logistics
              </li>
              <li className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Supply Chain Management
              </li>
              <li className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Emergency Staffing
              </li>
              <li className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Equipment Logistics
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-sm">303 Parker St, Newton Centre, MA 02459</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a href="tel:+18575656557" className="hover:text-primary-400 transition-colors text-sm">
                  +1 (857) 565-6557
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:sahmad5@soahealthcare.net" className="hover:text-primary-400 transition-colors text-sm">
                  sahmad5@soahealthcare.net
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaWhatsapp className="text-primary-500 flex-shrink-0" />
                <a href="https://wa.me/18575656557" className="hover:text-primary-400 transition-colors text-sm">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} SOA Healthcare. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

