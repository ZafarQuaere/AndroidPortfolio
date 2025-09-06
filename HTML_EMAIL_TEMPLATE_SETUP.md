# 🎨 HTML Email Template Setup Guide

This guide will help you set up the beautiful HTML email template in your EmailJS dashboard.

## 📧 **Template Preview**

Your emails will look like this:
- ✅ **Professional header** with gradient background
- ✅ **Organized contact information** in a styled box
- ✅ **Quick reply button** for easy responses
- ✅ **Formatted message content** with proper spacing
- ✅ **Timestamp** showing when the message was received
- ✅ **Mobile responsive** design
- ✅ **Modern styling** with your brand colors

## 🚀 **Setup Instructions**

### Step 1: Access EmailJS Dashboard
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your account
3. Navigate to **"Email Templates"**

### Step 2: Create New Template
1. Click **"Create New Template"**
2. Give it a name like: `Portfolio Contact Template`
3. Set the **Subject** field to:
   ```
   New Portfolio Contact: {{subject}}
   ```

### Step 3: Set Up the HTML Template

#### **Option A: Copy from File (Recommended)**
1. Open the `email-template.html` file in your project
2. Copy the entire HTML content
3. In EmailJS dashboard, switch to **"HTML"** tab
4. Paste the HTML content

#### **Option B: Manual Setup**
If you prefer to type it manually, use the HTML content below:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Portfolio Contact</title>
    <style>
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8fafc;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 30px 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px;
        }
        
        .contact-info {
            background-color: #f1f5f9;
            border-left: 4px solid #10b981;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 0 8px 8px 0;
        }
        
        .contact-info h2 {
            color: #1e293b;
            font-size: 20px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .contact-info h2::before {
            content: "👤";
            margin-right: 10px;
            font-size: 18px;
        }
        
        .info-row {
            display: flex;
            margin-bottom: 12px;
            align-items: center;
        }
        
        .info-label {
            font-weight: 600;
            color: #475569;
            min-width: 80px;
            margin-right: 15px;
        }
        
        .info-value {
            color: #1e293b;
            flex: 1;
        }
        
        .info-value a {
            color: #10b981;
            text-decoration: none;
        }
        
        .info-value a:hover {
            text-decoration: underline;
        }
        
        .message-section {
            margin-top: 30px;
        }
        
        .message-section h3 {
            color: #1e293b;
            font-size: 18px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .message-section h3::before {
            content: "💬";
            margin-right: 10px;
            font-size: 16px;
        }
        
        .message-content {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            font-size: 16px;
            line-height: 1.7;
            color: #334155;
            white-space: pre-wrap;
        }
        
        .footer {
            background-color: #1e293b;
            color: #94a3b8;
            padding: 25px 40px;
            text-align: center;
            font-size: 14px;
        }
        
        .footer p {
            margin-bottom: 10px;
        }
        
        .footer a {
            color: #10b981;
            text-decoration: none;
        }
        
        .reply-button {
            display: inline-block;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            margin: 20px 0;
            transition: transform 0.2s;
        }
        
        .reply-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
        }
        
        .timestamp {
            color: #64748b;
            font-size: 12px;
            text-align: right;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #e2e8f0;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header, .content, .footer {
                padding: 20px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .info-row {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .info-label {
                margin-bottom: 5px;
                min-width: auto;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>New Portfolio Contact</h1>
            <p>Someone reached out through your portfolio website</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Contact Information -->
            <div class="contact-info">
                <h2>Contact Details</h2>
                <div class="info-row">
                    <span class="info-label">Name:</span>
                    <span class="info-value">{{from_name}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">
                        <a href="mailto:{{from_email}}">{{from_email}}</a>
                    </span>
                </div>
                <div class="info-row">
                    <span class="info-label">Subject:</span>
                    <span class="info-value">{{subject}}</span>
                </div>
            </div>
            
            <!-- Quick Reply Button -->
            <div style="text-align: center;">
                <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="reply-button">
                    📧 Quick Reply
                </a>
            </div>
            
            <!-- Message Content -->
            <div class="message-section">
                <h3>Message</h3>
                <div class="message-content">{{message}}</div>
            </div>
            
            <!-- Timestamp -->
            <div class="timestamp">
                Received on {{current_date}} at {{current_time}}
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p>This email was sent from your portfolio contact form</p>
            <p>Portfolio: <a href="http://localhost:3000">Android Portfolio</a></p>
            <p>Reply directly to this email to respond to {{from_name}}</p>
        </div>
    </div>
</body>
</html>
```

### Step 4: Configure Template Variables

Make sure these variables are properly mapped in your template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's name | "John Doe" |
| `{{from_email}}` | Sender's email | "john@example.com" |
| `{{subject}}` | Message subject | "Project Inquiry" |
| `{{message}}` | Message content | "I'd like to discuss..." |
| `{{current_date}}` | Date received | "Monday, January 15, 2024" |
| `{{current_time}}` | Time received | "2:30 PM EST" |

### Step 5: Test the Template

1. Click **"Test it"** in the EmailJS dashboard
2. Fill in sample values for all variables
3. Send a test email to yourself
4. Check that the formatting looks correct

### Step 6: Save and Activate

1. Click **"Save"** to save your template
2. Copy the **Template ID** (you'll need this)
3. Make sure the template is **Active**

## 🔧 **Update Your Configuration**

Update your `src/lib/emailjs.js` with the new Template ID:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_ud6t0fe', // Your service ID
  templateId: 'YOUR_NEW_TEMPLATE_ID', // Replace with your HTML template ID
  publicKey: 'your_public_key', // Your public key
};
```

## 🎨 **Customization Options**

You can customize the template by modifying:

### Colors
- **Primary Green**: `#10b981` (change to your brand color)
- **Dark Green**: `#059669` (darker shade of primary)
- **Background**: `#f8fafc` (light gray)
- **Text**: `#333333` (dark gray)

### Fonts
- Currently uses system fonts for best compatibility
- You can add Google Fonts if needed

### Layout
- Adjust padding and margins in the CSS
- Modify the responsive breakpoints
- Change the container width (currently 600px)

## 📱 **Mobile Responsiveness**

The template includes:
- ✅ Responsive design for mobile devices
- ✅ Proper font scaling
- ✅ Touch-friendly buttons
- ✅ Readable text on small screens

## 🔍 **Troubleshooting**

### Common Issues:

**1. Template variables not showing**
- Check variable names match exactly (case-sensitive)
- Ensure double curly braces: `{{variable_name}}`

**2. Styling not working**
- Some email clients strip CSS - the template uses inline styles where needed
- Test with different email providers (Gmail, Outlook, etc.)

**3. Images not displaying**
- Use emoji instead of images for better compatibility
- Host images externally if needed

**4. Template not found**
- Verify Template ID is correct
- Ensure template is saved and active

## ✅ **Success Checklist**

- [ ] HTML template copied to EmailJS dashboard
- [ ] Subject line configured
- [ ] All variables properly mapped
- [ ] Test email sent and received
- [ ] Template ID updated in code
- [ ] Styling looks good in your email client

## 🎉 **Result**

Once set up, you'll receive beautiful, professional-looking emails that include:
- Clean, modern design matching your portfolio
- All contact information clearly organized
- One-click reply functionality
- Timestamp for tracking
- Mobile-friendly layout

Your portfolio contact form will now send emails that look as professional as your portfolio itself! 🚀
