# SOA Healthcare - Backend Services

This directory contains backend services for the SOA Healthcare appointment booking system.

## Structure

```
backend/
├── services/
│   └── emailService.ts    # Mailjet email service
└── types/
    └── appointment.ts     # TypeScript type definitions
```

## Email Service - Mailjet Integration

### Configuration

**Email Provider:** Mailjet (https://www.mailjet.com)

**Required:** Two API credentials from Mailjet:
1. ✅ API Key: `25114bb5dec46344ac97c67515962f22`
2. ⚠️ Secret Key: Get from https://app.mailjet.com/account/apikeys

### Setup

1. **Get Secret Key from Mailjet:**
   - Visit: https://app.mailjet.com/account/apikeys
   - Find your Secret Key
   - Copy it

2. **Update `.env.local`:**
   ```env
   MAILJET_API_KEY=25114bb5dec46344ac97c67515962f22
   MAILJET_SECRET_KEY=your_secret_key_here
   ```

3. **Restart Server:**
   ```bash
   npm run dev
   ```

### Email Features

✅ **Concise & Clean** - Only essential information
✅ **Professional Design** - SOA Healthcare branding
✅ **Mobile Responsive** - Works on all devices
✅ **Clickable Phone** - Direct call from email
✅ **Fast Delivery** - Mailjet's reliable infrastructure

### Email Content (Minimal)

**Subject:** `New Appointment: [Patient Name]`

**Body:**
- Patient Name
- Phone Number (clickable)
- Consultation Purpose
- Message (if provided)
- Timestamp
- Action reminder (24 hours)

---

## API Endpoint

### POST /api/appointment

**URL:** `/api/appointment`  
**Method:** `POST`

**Request:**
```json
{
  "name": "John Doe",
  "phone": "+1 (857) 565-6557",
  "purpose": "residency-development",
  "message": "Optional message"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Appointment request received successfully!"
}
```

**Response (Error):**
```json
{
  "error": "Error description"
}
```

---

## Mailjet Free Tier

- **6,000 emails/month** (200/day)
- **Email tracking** included
- **99% deliverability**
- **Professional infrastructure**

Perfect for appointment bookings!

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Authentication failed" | Add Secret Key to `.env.local` |
| Email not received | Check spam folder |
| "Invalid credentials" | Verify both API Key and Secret Key |
| Server error | Check console logs |

---

## Production Deployment

**Add to Vercel/Netlify:**
```
MAILJET_API_KEY=25114bb5dec46344ac97c67515962f22
MAILJET_SECRET_KEY=your_secret_key
```

---

**See `MAILJET_SETUP.md` for detailed setup instructions.**
