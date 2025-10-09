# 📧 Email Setup Guide - SOA Healthcare

Complete guide to set up the appointment email system for SOA Healthcare website.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Gmail App Password

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/
   - Sign in with the Gmail account you want to use (e.g., soahealthcare24@gmail.com)

2. **Enable 2-Step Verification**
   - Click on "Security" in the left sidebar
   - Find "2-Step Verification" and enable it if not already enabled
   - Follow the setup wizard

3. **Generate App Password**
   - After 2-Step Verification is enabled, go back to "Security"
   - Scroll down to "App passwords" section
   - Click "App passwords"
   - Select:
     - **App:** Mail
     - **Device:** Other (Custom name)
   - Type: "SOA Healthcare Website"
   - Click "Generate"
   - **Copy the 16-character password** (you won't see it again!)

### Step 2: Configure Environment Variables

1. **Create `.env.local` file** in project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit `.env.local`** and add your credentials:
   ```env
   EMAIL_USER=soahealthcare24@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```
   
   Replace `xxxx xxxx xxxx xxxx` with the 16-character App Password from Step 1.

### Step 3: Test the Setup

1. **Restart the development server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Test the appointment form:**
   - Go to: http://localhost:3000/contact
   - Fill out the form
   - Click "Book Appointment"
   - Check `soahealthcare24@gmail.com` inbox for the email!

---

## ✅ What Happens When Form is Submitted?

1. **User fills out form** on the website
2. **Form validates** required fields (name, phone, purpose)
3. **API endpoint** receives the data at `/api/appointment`
4. **Email is sent** to `soahealthcare24@gmail.com` with:
   - ✅ Professional HTML template
   - ✅ All appointment details
   - ✅ Timestamp
   - ✅ Formatted consultation purpose
5. **User sees** success confirmation message
6. **You receive email** with appointment request

---

## 📧 Email Template Features

The email sent to `soahealthcare24@gmail.com` includes:

- **Beautiful HTML design** with SOA Healthcare branding
- **Patient Information:**
  - Name
  - Phone number (clickable to call)
  - Purpose of consultation
  - Additional message/information
- **Timestamp** with full date and time
- **Action reminder** to contact patient within 24 hours
- **Mobile-friendly** design

---

## 🔧 Troubleshooting

### Email Not Sending?

**Problem:** Form submits but no email received

**Solutions:**
1. Check `.env.local` file exists in project root
2. Verify EMAIL_USER and EMAIL_PASSWORD are correct
3. Check console for error messages
4. Make sure you're using App Password, not regular password
5. Verify 2-Step Verification is enabled on Gmail

### Error: "Invalid login"

**Solution:** You're using your regular Gmail password instead of App Password
- Go back to Step 1 and generate a proper App Password

### Error: "Connection timeout"

**Solutions:**
1. Check your internet connection
2. Verify firewall isn't blocking port 587
3. Try restarting the dev server

### Form Shows Error Message

**Check:**
1. Open browser console (F12) for detailed errors
2. Check terminal/server logs for backend errors
3. Verify all required form fields are filled

---

## 🔒 Security Best Practices

✅ **DO:**
- Use App Password (16 characters)
- Keep `.env.local` secret (it's gitignored)
- Use different passwords for dev and production
- Enable 2-Step Verification on Gmail

❌ **DON'T:**
- Never commit `.env.local` to git
- Don't use regular Gmail password
- Don't share App Password publicly
- Don't disable 2-Step Verification

---

## 🚀 Production Deployment (Vercel/Netlify)

### Vercel

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add two variables:
   - `EMAIL_USER` = soahealthcare24@gmail.com
   - `EMAIL_PASSWORD` = (your App Password)
4. Select environment: **Production, Preview, Development**
5. Click **Save**
6. Redeploy your application

### Netlify

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add:
   - `EMAIL_USER` = soahealthcare24@gmail.com
   - `EMAIL_PASSWORD` = (your App Password)
4. Click **Save**
5. Trigger a new deploy

---

## 📝 Email Service Details

**Service Used:** Gmail SMTP
**Port:** 587 (TLS)
**Host:** smtp.gmail.com
**Authentication:** OAuth2 via App Password

**Sending Limit:**
- Gmail free account: 500 emails/day
- Sufficient for appointment bookings

---

## 🔄 Alternative Email Providers

If you want to use a different email service:

### SendGrid (Free: 100 emails/day)
```env
# Use SendGrid API Key instead
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_api_key
```

### AWS SES (Pay as you go)
```env
EMAIL_SERVICE=ses
AWS_SES_USER=your_aws_access_key
AWS_SES_PASSWORD=your_aws_secret_key
```

To switch providers, update `backend/services/emailService.ts` accordingly.

---

## 📊 Monitoring

### Check if Emails are Sending

**Development:**
- Check server console logs
- Look for ✅ or ❌ emoji messages

**Production:**
- Check Vercel/Netlify logs
- Monitor Gmail "Sent" folder

### Email Delivery Time

- Typical: **1-5 seconds**
- If slower: Check Gmail quotas and connection

---

## 💡 Pro Tips

1. **Create email filters** in Gmail to organize appointment emails
2. **Set up auto-reply** for appointment confirmations
3. **Use labels** to track appointment status
4. **Enable desktop notifications** for new appointment emails
5. **Create email template** for responding to appointments

---

## 📞 Support

If you encounter issues:

1. Check `backend/README.md` for detailed documentation
2. Review server console logs for errors
3. Test with a simple email first
4. Verify Gmail account settings

---

**Last Updated:** October 2025  
**Status:** ✅ Production Ready  
**Email:** soahealthcare24@gmail.com

