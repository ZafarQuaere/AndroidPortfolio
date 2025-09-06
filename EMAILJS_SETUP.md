# 📧 EmailJS Setup Guide

This guide will help you configure EmailJS to make your contact form functional.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In the EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook** 
   - **Yahoo**
   - Or any SMTP service
3. Follow the connection instructions
4. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

```html
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this)

### Step 5: Update Configuration
Update the EmailJS configuration in `src/lib/emailjs.js`:

```javascript
// Replace these with your actual values
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id_here',     // From Step 2
  templateId: 'your_template_id_here',   // From Step 3  
  publicKey: 'your_public_key_here',     // From Step 4
};
```

### Step 6: Update Your Email
In `src/lib/emailjs.js`, replace the placeholder email:

```javascript
to_email: 'your-actual-email@example.com', // Replace with your email
```

## 🔧 Environment Variables (Optional but Recommended)

For better security, you can use environment variables:

1. Create `.env` file in the `frontend` directory:
```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. The configuration will automatically use these values.

## ✅ Testing

1. Start your development server:
   ```bash
   cd frontend
   yarn start
   ```

2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## 🎯 EmailJS Template Variables

The following variables are sent to your email template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Sender's email (for easy replies)

## 📊 Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 1 email template
- ✅ Basic support

## 🔒 Security Notes

- ✅ Public key is safe to expose in frontend code
- ✅ No sensitive credentials in client-side code
- ✅ EmailJS handles authentication server-side
- ✅ Built-in spam protection

## 🆘 Troubleshooting

### Common Issues:

**1. "Failed to send message"**
- Check your Service ID, Template ID, and Public Key
- Verify your email service is connected
- Check browser console for detailed errors

**2. "Template not found"**
- Ensure Template ID matches exactly
- Template must be published (not draft)

**3. "Service not found"**  
- Verify Service ID is correct
- Email service must be connected and active

**4. Emails not received**
- Check spam/junk folder
- Verify template variables are correct
- Test with a different email address

### Getting Help:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

## 🎉 Success!

Once configured, your contact form will:
- ✅ Send emails directly from the frontend
- ✅ Show success/error messages
- ✅ Reset form after successful submission
- ✅ Work on any hosting platform (Netlify, Vercel, etc.)

---

**Need help?** The configuration is already implemented in your code - you just need to add your EmailJS credentials!
