# 🔧 EmailJS Troubleshooting Guide

## 🚨 Common Issues and Solutions

### Issue: "Failed to send message" Error

#### **Quick Fixes to Try:**

### 1. **Check EmailJS Dashboard**
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Verify your **Service** is connected and active
- Verify your **Template** is published (not draft)
- Check if you have remaining quota (free tier: 200 emails/month)

### 2. **Verify Template Variables**
Your template should include these exact variables:
```
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
{{to_email}}
{{reply_to}}
{{current_date}}
{{current_time}}
```

### 3. **Check Browser Console**
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Submit the form again
4. Look for detailed error messages

### 4. **Test with Simple Template**
Create a basic template with just:
```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

### 5. **Verify Service Configuration**
In EmailJS dashboard:
- Service must be **Connected** (green status)
- Check if using Gmail: ensure "Less secure app access" is enabled
- For other providers: verify SMTP settings

## 🔍 **Debug Steps**

### Step 1: Check Configuration
Your current config:
- Service ID: `service_ud6t0fe`
- Template ID: `template_2atnnhe`
- Public Key: `AFq2hXKaI0t37td-P`

### Step 2: Test Template Manually
1. Go to EmailJS dashboard
2. Open your template
3. Click "Test it"
4. Fill in sample values
5. Send test email

### Step 3: Check Network Issues
- Try from different network/device
- Disable VPN if using one
- Check if corporate firewall is blocking EmailJS

## 🛠️ **Quick Fix Solutions**

### Solution 1: Simplified Template
Replace your template content with:
```html
<h2>New Contact from Portfolio</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

### Solution 2: Alternative Configuration
If current config fails, try this simplified version:

```javascript
// In src/lib/emailjs.js
const response = await emailjs.sendForm(
  'service_ud6t0fe',
  'template_2atnnhe',
  e.target, // Pass the form element directly
  'AFq2hXKaI0t37td-P'
);
```

### Solution 3: Fallback to Form Action
If EmailJS continues to fail, add this fallback:

```javascript
// Fallback mailto link
const fallbackEmail = () => {
  const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
  window.location.href = `mailto:zafarquaere@gmail.com?subject=${subject}&body=${body}`;
};
```

## 📋 **Checklist**

- [ ] Service is connected in EmailJS dashboard
- [ ] Template is published (not draft)
- [ ] Template variables match exactly
- [ ] Public key is correct
- [ ] Service ID is correct
- [ ] Template ID is correct
- [ ] Browser console shows no CORS errors
- [ ] Test email works from EmailJS dashboard
- [ ] Internet connection is stable

## 🆘 **Still Not Working?**

### Option 1: Use Basic Template
Create the simplest possible template:
```
Subject: New Portfolio Contact

{{message}}

From: {{from_name}}
Email: {{from_email}}
```

### Option 2: Contact EmailJS Support
- [EmailJS Support](https://www.emailjs.com/support/)
- Include your Service ID and Template ID
- Mention the specific error message

### Option 3: Alternative Services
If EmailJS continues to fail:
- **Formspree**: https://formspree.io/
- **Netlify Forms**: (if hosting on Netlify)
- **GetForm**: https://getform.io/

## 🎯 **Most Likely Causes**

1. **Template not published** (90% of cases)
2. **Service not connected** (5% of cases)
3. **Template variable mismatch** (3% of cases)
4. **Network/CORS issues** (2% of cases)

Try the solutions in this order for fastest resolution! 🚀
