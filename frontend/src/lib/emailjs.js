import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ud6t0fe',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_2atnnhe',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'AFq2hXKaI0t37td-P',
};

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data containing name, email, subject, message
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmail = async (formData) => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('All fields are required');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Invalid email format');
    }

    console.log('EmailJS Config:', {
      serviceId: EMAILJS_CONFIG.serviceId,
      templateId: EMAILJS_CONFIG.templateId,
      publicKey: EMAILJS_CONFIG.publicKey ? 'Set' : 'Not Set'
    });

    // Get current date and time for the email
    const now = new Date();
    const currentDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const currentTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'zafarquaere@gmail.com',
      to_name: 'Zafar Imam', // Add recipient name
      reply_to: formData.email,
      current_date: currentDate,
      current_time: currentTime,
    };

    console.log('Sending email with params:', templateParams);

    // Initialize EmailJS if not already done
    emailjs.init(EMAILJS_CONFIG.publicKey);

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('EmailJS Success:', response);
    return response;
  } catch (error) {
    console.error('EmailJS Error Details:', {
      error: error,
      message: error.message,
      status: error.status,
      text: error.text
    });
    
    // Provide more specific error messages
    if (error.status === 400) {
      throw new Error('Invalid request. Please check your input and try again.');
    } else if (error.status === 401) {
      throw new Error('Authentication failed. Please contact the site administrator.');
    } else if (error.status === 404) {
      throw new Error('Service not found. Please contact the site administrator.');
    } else if (error.status === 429) {
      throw new Error('Too many requests. Please wait a moment and try again.');
    } else if (error.message && error.message.includes('network')) {
      throw new Error('Network error. Please check your connection and try again.');
    } else {
      throw new Error('Failed to send message. Please try again or contact me directly.');
    }
  }
};

export default {
  init: initEmailJS,
  send: sendEmail,
  config: EMAILJS_CONFIG,
};
