# Setup & Deployment Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## 📝 Customization Checklist

### Essential Updates

#### 1. **Company Information**
- [ ] Update company name in all files (search for "MedStaff Logistics")
- [ ] Update tagline and descriptions
- [ ] Replace placeholder contact information

#### 2. **Contact Details**
Update in these files:
- `components/Navbar.tsx` (top bar)
- `components/Footer.tsx` (footer section)
- `app/contact/page.tsx` (contact page)

Replace:
- Phone: `+1 (234) 567-890`
- Email: `info@medstafflogistics.com`
- Address: Update to your actual address
- WhatsApp: Update number in all instances

#### 3. **Images**
Replace Unsplash placeholder images with your own:
- Update `next.config.js` to include your image domain
- Replace image URLs in all page files
- Add company logo (update in `Navbar.tsx` and `Footer.tsx`)

#### 4. **SEO & Metadata**
- [ ] Update meta descriptions in each page
- [ ] Update `app/sitemap.ts` with your domain
- [ ] Update `public/robots.txt` with your sitemap URL
- [ ] Add favicon.ico to public folder

#### 5. **Content Updates**

**Home Page** (`app/page.tsx`):
- [ ] Update hero text
- [ ] Modify services section
- [ ] Update statistics
- [ ] Replace testimonials with real client feedback

**About Page** (`app/about/page.tsx`):
- [ ] Write your company's mission and vision
- [ ] Update core values
- [ ] Add your company timeline
- [ ] Replace leadership team info

**Services Page** (`app/services/page.tsx`):
- [ ] Customize service offerings
- [ ] Update service descriptions
- [ ] Modify service features

**Industries Page** (`app/industries/page.tsx`):
- [ ] Customize industries you serve
- [ ] Update industry-specific services

**Careers Page** (`app/careers/page.tsx`):
- [ ] Add real job openings
- [ ] Update benefits and perks
- [ ] Customize company culture info

**Contact Page** (`app/contact/page.tsx`):
- [ ] Update contact form submission (add backend)
- [ ] Update Google Maps embed with your location
- [ ] Configure form API endpoint

## 🎨 Design Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#0073e6', // Change this to your brand color
    // ... adjust other shades
  }
}
```

### Fonts
Update in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
const yourFont = YourFont({ subsets: ['latin'] })
```

### Logo
Replace the placeholder logo in:
- `components/Navbar.tsx`
- `components/Footer.tsx`

## 🔧 Advanced Configuration

### Form Submission
To make the contact form functional:

1. **Option 1: Use a form service (Formspree, Basin, etc.)**
```typescript
// In app/contact/page.tsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  // Handle response
}
```

2. **Option 2: Create your own API endpoint**
Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  // Process form data (send email, save to database, etc.)
  return NextResponse.json({ success: true })
}
```

### Analytics Integration

**Google Analytics:**
1. Get your GA4 measurement ID
2. Add to `app/layout.tsx`:
```typescript
<Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Meta Pixel:**
Similar process, add Meta Pixel code to layout

### WhatsApp Integration
Update WhatsApp number in:
- `components/Footer.tsx`
- `components/FloatingQuoteButton.tsx`
- `app/contact/page.tsx`

Replace `1234567890` with your WhatsApp number (with country code, no + or spaces)

### Google Maps
1. Get Google Maps embed code for your location
2. Replace iframe src in `app/contact/page.tsx`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Click Deploy

### Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. Deploy!

### Deploy to Your Own Server

1. **Build the project:**
```bash
npm run build
```

2. **Start production server:**
```bash
npm start
```

3. Use PM2 or similar to keep it running:
```bash
pm2 start npm --name "portfolio" -- start
```

## 🔒 Security & Performance

### Environment Variables
Create `.env.local` for sensitive data:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
CONTACT_EMAIL=your@email.com
# Add other sensitive data
```

### Performance Optimization
- Images are already optimized with Next.js Image component
- Tailwind CSS is purged for production
- Code splitting is automatic with Next.js

### Security Headers
Add to `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ]
}
```

## 📱 Testing

### Test Responsiveness
- Mobile: Chrome DevTools (Cmd+Shift+M)
- Test on actual devices
- Use BrowserStack for cross-browser testing

### Test Performance
- Run Lighthouse audit in Chrome DevTools
- Use PageSpeed Insights: https://pagespeed.web.dev/

### SEO Testing
- Google Search Console
- SEO analyzers (Ahrefs, SEMrush)

## 🆘 Troubleshooting

### Common Issues

**Images not loading:**
- Check `next.config.js` has correct domains
- Verify image URLs are correct
- Check image optimization settings

**Styling issues:**
- Clear `.next` folder and rebuild
- Check Tailwind configuration
- Verify CSS imports

**Build errors:**
- Clear node_modules and reinstall
- Check TypeScript errors
- Verify all imports are correct

## 📞 Support

For questions or issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Tailwind CSS docs: https://tailwindcss.com/docs
3. GitHub Issues (if using version control)

---

**Good luck with your healthcare logistics website! 🏥**

