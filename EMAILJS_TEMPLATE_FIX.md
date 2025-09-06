# 🚨 EmailJS Template Configuration Fix

The error "The recipients address is empty" means your EmailJS template needs to be configured properly.

## 📋 Quick Fix Steps

### 1. Login to EmailJS Dashboard
Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/) and login

### 2. Navigate to Email Templates
Click on "Email Templates" in the left sidebar

### 3. Find Your Template
Look for template with ID: `template_2atnnhe` (or create a new one)

### 4. Configure Template Settings

#### In the "To email" section:
- **Option 1 - Fixed Email (Recommended):**
  ```
  zafarquaere@gmail.com
  ```
  
- **Option 2 - Dynamic Email:**
  ```
  {{to_email}}
  ```

#### In the "To name" section (optional):
```
{{to_name}}
```
or
```
Zafar Imam
```

#### In the "Reply To" section:
```
{{reply_to}}
```

#### In the "From name" section:
```
{{from_name}}
```

### 5. Update Email Content

Make sure your email template content includes these variables:

```
Subject: New Portfolio Contact: {{subject}}

Contact Details:
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Received on {{current_date}} at {{current_time}}
```

### 6. Save Template
Click "Save" at the bottom of the template editor

### 7. Test Again
Go back to your portfolio and try sending a message again

## 🎯 Common Issues

### If still getting errors:

1. **Check Auto-Reply Settings**
   - Make sure "Auto-Reply" is disabled if you don't need it
   - Auto-reply with empty recipient can cause this error

2. **Verify Service Configuration**
   - Go to "Email Services" 
   - Click on your service (service_ud6t0fe)
   - Make sure it's properly connected to your email

3. **Template Variables**
   Your code sends these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`
   - `{{to_name}}`
   - `{{reply_to}}`
   - `{{current_date}}`
   - `{{current_time}}`

   Make sure your template uses the same variable names!

## 💡 Pro Tips

1. **Use the HTML template** provided in `email-template.html` 
   - Copy the entire HTML content
   - Paste it in the EmailJS template editor
   - Switch to "HTML" mode in the editor

2. **Test with EmailJS Test Feature**
   - In the template editor, click "Test It"
   - Fill in test values
   - See if the email sends successfully

3. **Check Spam Folder**
   - Emails might go to spam initially
   - Mark as "Not Spam" to train your email provider

## ✅ Verification

After fixing, the troubleshooter should show:
- ✅ Configuration values present
- ✅ EmailJS initialization
- ✅ Email send test

Need more help? Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
