# SOA Healthcare - Backend Services

This directory contains backend services and utilities for the SOA Healthcare application.

## Structure

```
backend/
├── services/
│   └── emailService.ts    # Appointment logging service
└── types/
    └── appointment.ts     # TypeScript type definitions
```

## Appointment Service

### Current Implementation: Console Logging

The appointment service currently **logs all appointment details to the server console**. This allows you to:
- ✅ See all appointment requests immediately
- ✅ Test the form without email configuration
- ✅ Integrate with any email service later

### How It Works

When a user submits an appointment:

1. **Form data validated** in API endpoint
2. **Details logged to console** with beautiful formatting
3. **Success response** sent to user
4. **You see the appointment** in your terminal/server logs

### Console Output Example

```
================================================================================
📧 NEW APPOINTMENT REQUEST - SOA HEALTHCARE
================================================================================

👤 PATIENT INFORMATION:
   Name: John Doe
   Phone: +1 (857) 565-6557
   Purpose: Residency Applicant Development

💬 MESSAGE:
   I need help with my ERAS application for the 2025 match

⏰ TIMESTAMP:
   Thursday, October 9, 2025 at 11:30:00 PM Eastern Daylight Time

📩 EMAIL DESTINATION:
   To: soahealthcare24@gmail.com

================================================================================
✅ Appointment logged successfully!
⚠️  NOTE: Email service not configured - details logged to console
================================================================================
```

---

## API Endpoints

### POST /api/appointment

Submit a new appointment request.

**Endpoint:** `/api/appointment`  
**Method:** `POST`  
**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "+1 (857) 565-6557",
  "purpose": "residency-development",
  "message": "I need help with my ERAS application"
}
```

**Validation Rules:**
- `name`: Required, string
- `phone`: Required, valid phone format
- `purpose`: Required, string
- `message`: Optional, string

**Success Response (200):**
```json
{
  "success": true,
  "message": "Appointment request received successfully!"
}
```

**Error Responses:**

**400 Bad Request:**
```json
{
  "error": "Missing required fields. Please provide name, phone, and purpose."
}
```

**500 Internal Server Error:**
```json
{
  "error": "Failed to send appointment request."
}
```

---

## Integrating Email Service (Future)

When you're ready to send actual emails, you can integrate any service:

### Option 1: Resend (Recommended)
```bash
npm install resend
```

```typescript
// In emailService.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'SOA Healthcare <onboarding@resend.dev>',
  to: ['soahealthcare24@gmail.com'],
  subject: 'New Appointment',
  html: formatEmailContent(data).html
})
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 3: AWS SES
```bash
npm install @aws-sdk/client-ses
```

---

## Development

### View Appointments

All appointment requests appear in your **terminal/console** where the dev server is running.

**To see appointments:**
1. Keep terminal visible
2. Submit test appointments
3. Watch console output

### Testing

1. **Start Dev Server:**
   ```bash
   npm run dev
   ```

2. **Test Form:**
   - Visit: http://localhost:3000/contact
   - Fill out appointment form
   - Click "Book Appointment"

3. **Check Console:**
   - Look at terminal output
   - See formatted appointment details
   - Verify all data is captured correctly

---

## Security

- ✅ Input validation on all fields
- ✅ Phone format validation
- ✅ TypeScript type safety
- ✅ Error handling
- ✅ No API keys needed (for current implementation)

---

## Production Deployment

The current implementation works in production without any configuration:

1. **Deploy to Vercel/Netlify**
2. **Appointments logged to server logs**
3. **Check deployment logs** to see appointments

### Viewing Appointments in Production:

**Vercel:**
- Dashboard → Your Project → Functions
- View real-time logs
- See appointment details

**Netlify:**
- Functions tab
- View function logs

---

## Type Definitions

See `/backend/types/appointment.ts`:

```typescript
export interface AppointmentData {
  name: string
  phone: string
  purpose: string
  message: string
}
```

---

## Monitoring

### Development:
- ✅ Terminal console shows all appointments
- ✅ Formatted output for easy reading
- ✅ Timestamps included

### Production:
- ✅ Vercel/Netlify function logs
- ✅ Real-time monitoring
- ✅ Export logs if needed

---

**Last Updated:** October 2025  
**Status:** ✅ Production Ready (Console Logging)  
**Email Service:** Not configured (logs to console)
