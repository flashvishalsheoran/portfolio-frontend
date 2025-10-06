# MedStaff Logistics - Healthcare Portfolio Website

A modern, professional portfolio website for hospital logistics and staffing services, built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **6 Professional Pages**: Home, About Us, Services, Industries We Serve, Careers, Contact
- **Modern UI/UX**: Clean, corporate design with healthcare aesthetics
- **Responsive Design**: Fully mobile-responsive across all devices
- **Smooth Animations**: Subtle fade-in and slide-up transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Interactive Components**: 
  - Sticky navigation with scroll effects
  - Floating quote button with quick actions
  - Contact form with validation
  - Testimonials carousel
  - Stats counters
  - WhatsApp integration

## 🎨 Design Highlights

- **Color Scheme**: Professional blue and grey tones with white background
- **Typography**: Clean, readable fonts (Inter)
- **Images**: High-quality healthcare imagery from Unsplash
- **Icons**: React Icons library for consistent iconography
- **Animations**: Framer Motion for smooth, professional animations

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Optimization**: Next.js Image component

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
portfolio-frontend/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── industries/        # Industries We Serve page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── ServiceCard.tsx    # Service card component
│   ├── TestimonialCard.tsx # Testimonial card
│   ├── StatsSection.tsx   # Statistics section
│   └── FloatingQuoteButton.tsx # Floating action button
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎯 Pages Overview

### 1. Home Page
- Hero section with call-to-action
- Core services showcase
- Why choose us section
- Company preview
- Client testimonials
- Stats and achievements

### 2. About Us
- Company mission and vision
- Core values
- Company journey/timeline
- Leadership team
- Statistics

### 3. Services
- Healthcare staffing services
- Medical logistics services
- Additional specialized services
- Service process breakdown

### 4. Industries We Serve
- Hospitals & Medical Centers
- Outpatient Clinics
- Nursing Homes
- Emergency Medical Services
- Home Healthcare
- Laboratories
- Surgical Centers
- Pediatric Facilities

### 5. Careers
- Why join us
- Benefits and perks
- Open positions
- Application process

### 6. Contact Us
- Contact information
- Contact form with validation
- Google Maps integration
- Quick contact options (Phone, Email, WhatsApp)

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    500: '#0073e6', // Main brand color
    600: '#005bb3',
    // ... other shades
  }
}
```

### Content
- Update company information in respective page files
- Replace placeholder images with actual photos
- Modify contact details in `Navbar.tsx`, `Footer.tsx`, and `Contact` page
- Update meta tags in each page's metadata

### Images
- High-quality images are loaded from Unsplash
- Replace with your own images by updating the `src` attributes
- Add your domain to `next.config.js` for external images

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

### `next.config.js`
Configure Next.js settings including image domains

### `tailwind.config.ts`
Customize Tailwind theme, colors, and animations

### `tsconfig.json`
TypeScript compiler options

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
1. Build the project: `npm run build`
2. Start server: `npm start`
3. Deploy the `.next` folder

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags for each page
- Open Graph tags
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design

## 🔗 External Integrations

### WhatsApp Integration
Update WhatsApp number in:
- `components/Footer.tsx`
- `components/FloatingQuoteButton.tsx`
- `app/contact/page.tsx`

### Google Analytics (Optional)
Add your tracking ID to `app/layout.tsx`

### Google Maps
Update map embed URL in `app/contact/page.tsx`

## 📞 Support & Contact

For support or questions about this website:
- Email: info@medstafflogistics.com
- Phone: +1 (234) 567-890

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for Healthcare Excellence**

