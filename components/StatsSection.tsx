'use client'

import { useState, useEffect, useRef } from 'react'

interface Stat {
  number: string
  label: string
  suffix?: string
}

interface StatsSectionProps {
  stats: Stat[]
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-primary-100 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

