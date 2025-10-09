# 📧 Resend Email Setup Guide - SOA Healthcare

Complete guide to set up the appointment email system using Resend (much simpler than Gmail!).

---

## 🚀 Quick Setup (3 Minutes)

### Step 1: Create Resend Account

1. **Visit Resend:**
   - Go to: https://resend.com
   - Click "Sign Up" (free account)
   - Sign up with GitHub or email

2. **Verify Your Email:**
   - Check your email inbox
   - Click the verification link
   - Log in to Resend dashboard

### Step 2: Get API Key

1. **Navigate to API Keys:**
   - In Resend dashboard, go to **API Keys**
   - Click **"Create API Key"**

2. **Create New Key:**
   - Name: `SOA Healthcare Website`
   - Permission: **Full Access** (or **Sending Access**)
   - Click **Create**

3. **Copy API Key:**
   - **Important:** Copy the API key immediately
   - You won't be able to see it again!
   - It looks like: `re_123abc456def789...`

### Step 3: Configure Environment Variable

1. **Update `.env.local` file:**
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

2. **Save the file**

### Step 4: Test the Setup

1. **Restart the development server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Test the appointment form:**
   - Go to: http://localhost:3000/contact
   - Fill out the form
   - Click "Book Appointment"
   - Check `soahealthcare24@gmail.com` inbox!

---

## ✅ What Happens When Form is Submitted?

1. **User fills out form** on the website
2. **Form validates** required fields
3. **API endpoint** receives the data
4. **Resend API** sends email to `soahealthcare24@gmail.com`
5. **User sees** success confirmation
6. **Email delivered** (typically within seconds!)

---

## 🎨 Email Template Features

The email sent includes:

- ✅ **Professional HTML design** with SOA Healthcare branding
- ✅ **Responsive layout** (mobile-friendly)
- ✅ **All appointment details:**
  - Patient name
  - Phone number (clickable)
  - Consultation purpose
  - Additional message
- ✅ **Timestamp** with timezone
- ✅ **Action reminder** (24-hour response)

---

## 💰 Resend Pricing (Very Generous Free Tier!)

**Free Tier:**
- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ Perfect for appointment bookings!

**Paid Plans:**
- Start at $20/month for 50,000 emails
- Only needed if you get LOTS of appointments!

---

## 🔧 Troubleshooting

### Email Not Sending?

**Problem:** Form submits but no email received

**Solutions:**
1. Check `.env.local` file exists in project root
2. Verify `RESEND_API_KEY` is correct
3. Make sure you restarted the dev server after creating `.env.local`
4. Check browser console (F12) for errors
5. Check server terminal for error messages

### Error: "API key is required"

**Solution:** 
- You haven't set `RESEND_API_KEY` in `.env.local`
- Or the dev server wasn't restarted

### Error: "Invalid API key"

**Solution:**
- The API key is incorrect
- Go to Resend dashboard and create a new one
- Make sure you copied the entire key

### Emails Going to Spam?

**Solution:**
- For testing, check spam folder
- For production, verify your domain (see below)

---

## 🚀 Production Setup (Optional - For Custom Domain)

### Default Setup (Works Immediately):
- From: `SOA Healthcare <onboarding@resend.dev>`
- ✅ Works right away, no setup needed
- ⚠️ May go to spam occasionally

### Custom Domain (Recommended for Production):

1. **Add Your Domain in Resend:**
   - Go to **Domains** in Resend dashboard
   - Click **Add Domain**
   - Enter: `soahealthcare.com` (or your domain)

2. **Add DNS Records:**
   - Resend will show you DNS records to add
   - Add them in your domain registrar (GoDaddy, Namecheap, etc.)
   - Typically 3 records: SPF, DKIM, and DMARC

3. **Verify Domain:**
   - Click **Verify** in Resend dashboard
   - Once verified, update email service:

```typescript
// In backend/services/emailService.ts, change line:
from: 'SOA Healthcare <appointments@soahealthcare.com>',
```

---

## 🔒 Security Best Practices

✅ **DO:**
- Keep API key secret (it's in `.env.local`)
- Use different keys for dev and production
- Never commit `.env.local` to git (it's gitignored)
- Rotate API keys periodically

❌ **DON'T:**
- Never share your API key publicly
- Don't commit API key to GitHub
- Don't use the same key for multiple projects

---

## 🌐 Deploying to Vercel/Netlify

### Vercel:

1. Go to your project on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_your_api_key_here`
   - **Environment:** Production, Preview, Development
4. Click **Save**
5. **Redeploy** your application

### Netlify:

1. Go to **Site settings** → **Environment variables**
2. Click **Add a variable**
3. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_your_api_key_here`
4. Click **Save**
5. Trigger a new deploy

---

## 📊 Monitoring Emails

### Resend Dashboard Features:

1. **Logs:**
   - See all sent emails
   - Delivery status
   - Open/click tracking (optional)

2. **Email Details:**
   - Timestamp
   - Recipient
   - Subject
   - Delivery status
   - Error messages (if any)

3. **API Usage:**
   - Track how many emails sent
   - Monitor your free tier limit

---

## 🔄 Email Delivery Status

Resend provides detailed delivery information:

- **Sent:** Email successfully sent
- **Delivered:** Email reached recipient's server
- **Bounced:** Email address doesn't exist
- **Complained:** Marked as spam by recipient
- **Opened:** Recipient opened the email (if tracking enabled)

---

## 💡 Advantages of Resend vs Gmail SMTP

| Feature | Resend | Gmail SMTP |
|---------|--------|------------|
| Setup Time | 3 minutes | 10 minutes |
| Configuration | Just API key | App Password + 2FA |
| Reliability | Very high | Good |
| Email Limit | 100/day free | 500/day |
| Tracking | Built-in | Not available |
| Deliverability | Excellent | Good |
| Custom Domain | Easy | Not available |
| API | Modern REST | Legacy SMTP |

---

## 📝 Example Email

What the recipient sees:

```
From: SOA Healthcare <onboarding@resend.dev>
To: soahealthcare24@gmail.com
Subject: New Appointment Request - John Doe

[Beautiful HTML Email with:]
- Patient Name: John Doe
- Phone: +1 (857) 565-6557 [clickable]
- Purpose: Residency Applicant Development
- Message: Need help with ERAS application
- Timestamp: October 9, 2025 at 11:30 PM EDT
```

---

## 🧪 Testing

### Test in Development:

```bash
# 1. Make sure .env.local is configured
# 2. Start server
npm run dev

# 3. Visit contact page
# http://localhost:3000/contact

# 4. Fill form and submit
# 5. Check terminal for success message
# 6. Check email inbox
```

### Test in Production:

Same process, but on your live website!

---

## 📞 Resend Support

- **Documentation:** https://resend.com/docs
- **API Reference:** https://resend.com/docs/api-reference
- **Status Page:** https://status.resend.com
- **Support:** support@resend.com

---

## 🎯 Quick Checklist

Before going live:

- [ ] Resend account created
- [ ] API key generated
- [ ] `.env.local` updated with API key
- [ ] Dev server restarted
- [ ] Test email sent successfully
- [ ] Email received in inbox
- [ ] Environment variable added to Vercel/Netlify
- [ ] Production deployment tested

---

## 🚀 You're All Set!

With Resend configured, your appointment booking system will:

✅ Send professional emails instantly
✅ Track delivery status
✅ Never hit spam (with verified domain)
✅ Scale effortlessly
✅ Provide detailed analytics

**Much simpler than Gmail SMTP!** 🎉

---

## 📧 Need Help?

1. Check Resend dashboard logs
2. Review server console output
3. Verify API key is correct
4. Make sure server was restarted

---

**Last Updated:** October 2025  
**Status:** ✅ Production Ready with Resend  
**Email Destination:** soahealthcare24@gmail.com

