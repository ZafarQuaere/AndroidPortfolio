import emailjs from '@emailjs/browser';

// Test EmailJS configuration
export const testEmailJSConfig = async () => {
  const config = {
    serviceId: 'service_ud6t0fe',
    templateId: 'template_2atnnhe',
    publicKey: 'AFq2hXKaI0t37td-P',
  };

  console.log('Testing EmailJS Configuration...');
  console.log('Service ID:', config.serviceId);
  console.log('Template ID:', config.templateId);
  console.log('Public Key:', config.publicKey);

  try {
    // Initialize EmailJS
    emailjs.init(config.publicKey);
    console.log('✅ EmailJS initialized successfully');

    // Test with minimal template parameters
    const testParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message',
      to_email: 'zafarquaere@gmail.com',
      reply_to: 'test@example.com',
      current_date: new Date().toLocaleDateString(),
      current_time: new Date().toLocaleTimeString(),
    };

    console.log('Sending test email with params:', testParams);

    const response = await emailjs.send(
      config.serviceId,
      config.templateId,
      testParams
    );

    console.log('✅ Test email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('❌ EmailJS Test Failed:', error);
    return { success: false, error };
  }
};

// Simple configuration validator
export const validateEmailJSConfig = () => {
  const config = {
    serviceId: 'service_ud6t0fe',
    templateId: 'template_2atnnhe',
    publicKey: 'AFq2hXKaI0t37td-P',
  };

  const issues = [];

  if (!config.serviceId || config.serviceId === 'your_service_id') {
    issues.push('Service ID is not configured');
  }

  if (!config.templateId || config.templateId === 'your_template_id') {
    issues.push('Template ID is not configured');
  }

  if (!config.publicKey || config.publicKey === 'your_public_key') {
    issues.push('Public Key is not configured');
  }

  return {
    isValid: issues.length === 0,
    issues,
    config
  };
};
