# 🔑 Get Your Resend API Key (2 Minutes)

## Step-by-Step Instructions

### Step 1: Create Resend Account (1 minute)

1. **Visit:** https://resend.com
2. **Click:** "Start Building" or "Sign Up"
3. **Sign up with:**
   - GitHub (easiest - one click)
   - OR Email address
4. **Verify email** if using email signup

### Step 2: Get API Key (1 minute)

1. **After logging in**, you'll see the Resend dashboard
2. **Click:** "API Keys" in the left sidebar
3. **Click:** "Create API Key" button (blue button)
4. **Enter:**
   - Name: `SOA Healthcare Website`
   - Permission: **Full Access** (or Sending Access)
5. **Click:** "Create"
6. **COPY THE KEY IMMEDIATELY** - it looks like:
   ```
   re_abc123def456ghi789jkl012mno345pqr678stu
   ```
   ⚠️ You won't be able to see it again!

### Step 3: Add to Your Project

1. **Open** `.env.local` file in your project
2. **Replace** the placeholder with your actual key:
   ```env
   RESEND_API_KEY=re_abc123def456ghi789jkl012mno345pqr678stu
   ```
3. **Save** the file

### Step 4: Restart Server

```bash
# Stop the dev server (Ctrl+C or close terminal)
npm run dev
```

### Step 5: Test It!

1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Click "Book Appointment"
4. Check `soahealthcare24@gmail.com` inbox!

---

## ✅ Verification

### Check if API Key is Working:

After submitting the form, check your **terminal/console**:

**Success looks like:**
```
✅ Appointment email sent successfully via Resend
📧 Email ID: abc123-def456-ghi789
👤 Patient: John Doe
```

**Error looks like:**
```
❌ Resend API Error: { statusCode: 401, message: 'API key is invalid' }
```

---

## 🐛 Troubleshooting

### Still Getting "API key is invalid"?

**Check:**
1. ✅ API key starts with `re_`
2. ✅ No extra spaces before/after the key
3. ✅ File is named exactly `.env.local` (with the dot)
4. ✅ File is in project root (same folder as package.json)
5. ✅ Server was restarted after creating `.env.local`

### Can't Find .env.local File?

**Create it manually:**
```bash
cd /Users/vishal-sheoran/Documents/portfolio-frontend
echo "RESEND_API_KEY=re_your_key_here" > .env.local
```

Then edit and replace `re_your_key_here` with your actual key.

---

## 📧 Important Notes

### About the "From" Email

**You MUST use:** `onboarding@resend.dev`

This is Resend's testing domain. You **cannot** use:
- ❌ `soahealthcare24@gmail.com`
- ❌ Any other Gmail address
- ❌ Your own domain (unless verified in Resend)

**Correct format:**
```typescript
from: 'SOA Healthcare <onboarding@resend.dev>'
```

The email will still be delivered to `soahealthcare24@gmail.com` - that's the "to" field!

### Later (Optional): Verify Your Own Domain

If you want emails to come from `@soahealthcare.com`:
1. Buy a domain
2. Add it in Resend dashboard
3. Add DNS records
4. Then change from address

---

## 🎯 Quick Test

Once you have your API key:

**Test Command** (replace with your key):
```bash
# Set the environment variable
export RESEND_API_KEY=re_your_key_here

# Start server
npm run dev
```

---

## 📞 Need Help?

**Resend Support:**
- Docs: https://resend.com/docs/send-with-nodejs
- Support: support@resend.com
- Discord: https://resend.com/discord

**Your Current Setup:**
- From: `SOA Healthcare <onboarding@resend.dev>`
- To: `soahealthcare24@gmail.com`
- Subject: `New Appointment Request - [Patient Name]`

---

## ✨ Once Configured

After you add your API key, the appointment system will:

✅ Send emails instantly when users book appointments
✅ Deliver professional HTML emails
✅ Track delivery status in Resend dashboard
✅ Work perfectly in both dev and production

**Total setup time: 2 minutes!** 🚀

