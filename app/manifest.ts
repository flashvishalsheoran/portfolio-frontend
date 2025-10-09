import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SOA Healthcare - Logistics & Consulting',
    short_name: 'SOA',
    description: 'Professional healthcare logistics, staffing, and consulting services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0073e6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

