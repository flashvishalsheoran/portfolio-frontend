import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MedStaff Logistics - Healthcare Solutions',
    short_name: 'MedStaff',
    description: 'Professional hospital logistics and staffing services',
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

