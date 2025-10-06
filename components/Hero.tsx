'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  backgroundImage?: string
  children?: ReactNode
  compact?: boolean
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
  children,
  compact = false,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 ${
        compact ? 'py-20' : 'py-24 md:py-32'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-primary-200 font-semibold mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}
          <h1 className={`font-bold text-white mb-6 animate-slide-up ${
            compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl lg:text-7xl'
          }`}>
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
              {description}
            </p>
          )}
          
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
              {primaryButton && (
                <a href={primaryButton.href} className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  {primaryButton.text}
                </a>
              )}
              {secondaryButton && (
                <a href={secondaryButton.href} className="btn-outline">
                  {secondaryButton.text}
                </a>
              )}
            </div>
          )}

          {children && (
            <div className="mt-8 animate-fade-in animation-delay-600">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}

export default Hero

