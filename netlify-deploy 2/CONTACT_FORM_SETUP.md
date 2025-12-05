# Contact Form Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly to your Gmail (or any email) and optionally get WhatsApp notifications.

## 📧 Option 1: EmailJS Setup (Recommended - Easiest)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free for up to 200 emails/month)
3. Sign up with your Gmail account or create a new account
4. Verify your email address

### Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"** (or your preferred email provider)
4. Click **"Connect Account"** and authorize EmailJS to access your Gmail
5. Give your service a name (e.g., "Portfolio Contact Form")
6. Click **"Create Service"**
7. **Copy the Service ID** (you'll need this later)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
Hello!

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Reply-To: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Click **"Save"**
5. **Copy the Template ID** (you'll need this later)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the left sidebar
2. Find **"Public Key"** section
3. **Copy the Public Key** (you'll need this later)

### Step 5: Configure Your Portfolio

1. In your project root, create a file named `.env` (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the values with the IDs you copied:
   - `your_service_id_here` → Your Service ID from Step 2
   - `your_template_id_here` → Your Template ID from Step 3
   - `your_public_key_here` → Your Public Key from Step 4

### Step 6: Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the Contact section on your portfolio
3. Fill out the form and submit
4. Check your Gmail inbox - you should receive the email!

---

## 📱 Option 2: WhatsApp Notifications (Optional)

To get WhatsApp notifications in addition to emails, you can use one of these methods:

### Method A: Using Twilio WhatsApp API (Advanced)

1. Sign up for [Twilio](https://www.twilio.com/)
2. Get a WhatsApp-enabled phone number
3. Set up a webhook to send WhatsApp messages
4. Integrate with your EmailJS setup

**Note:** This requires a paid Twilio account and is more complex.

### Method B: Using WhatsApp Web Link (Simple)

You can add a WhatsApp link that opens WhatsApp Web with a pre-filled message. This is already included in the contact info section.

### Method C: Using Email-to-WhatsApp Services

1. Use services like [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/)
2. Create a Zap/Applet that:
   - Triggers when you receive an email from EmailJS
   - Sends a WhatsApp message via their API

---

## 🔒 Security Notes

1. **Never commit your `.env` file to Git**
   - The `.env` file is already in `.gitignore`
   - Your EmailJS Public Key is safe to use in frontend code (it's designed for client-side use)

2. **Rate Limiting**
   - EmailJS free tier allows 200 emails/month
   - Consider adding rate limiting to prevent spam

3. **Form Validation**
   - The form already has basic HTML5 validation
   - You can add more validation if needed

---

## 🐛 Troubleshooting

### Issue: "EmailJS configuration is missing"
**Solution:** Make sure your `.env` file exists and has all three variables set correctly.

### Issue: Emails not being received
**Solutions:**
1. Check your EmailJS dashboard for error logs
2. Verify your Service ID, Template ID, and Public Key are correct
3. Check your spam folder
4. Make sure your email service is properly connected in EmailJS

### Issue: Form shows error but no details
**Solution:** Check the browser console (F12) for detailed error messages.

---

## 📝 Alternative: Using Formspree (Simpler Alternative)

If you prefer an even simpler solution:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Get your form endpoint URL
5. Update the Contact component to use Formspree instead of EmailJS

---

## ✅ Testing Checklist

- [ ] EmailJS account created
- [ ] Email service connected (Gmail)
- [ ] Email template created
- [ ] `.env` file created with all variables
- [ ] Form submission works
- [ ] Email received in inbox
- [ ] Success message displays correctly
- [ ] Error handling works

---

## 🚀 Next Steps

After setup:
1. Test the form thoroughly
2. Consider adding a reCAPTCHA to prevent spam
3. Set up email filters in Gmail to organize contact form submissions
4. Optionally set up WhatsApp notifications using one of the methods above

---

## 📞 Need Help?

If you encounter any issues:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Check the browser console for errors
3. Verify all environment variables are set correctly

---

**That's it! Your contact form is now ready to receive messages directly to your email! 🎉**

