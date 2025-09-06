// Debug utility for EmailJS configuration
import emailjs from '@emailjs/browser';

export const debugEmailJS = async () => {
  console.group('🔍 EmailJS Debug Information');
  
  // Current configuration
  const config = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ud6t0fe',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_2atnnhe',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'AFq2hXKaI0t37td-P',
  };
  
  console.log('📋 Configuration:');
  console.log('Service ID:', config.serviceId);
  console.log('Template ID:', config.templateId);
  console.log('Public Key:', config.publicKey ? `${config.publicKey.substring(0, 10)}...` : 'Not Set');
  
  console.log('\n🔧 Environment Variables:');
  console.log('REACT_APP_EMAILJS_SERVICE_ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID || 'Not Set');
  console.log('REACT_APP_EMAILJS_TEMPLATE_ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'Not Set');
  console.log('REACT_APP_EMAILJS_PUBLIC_KEY:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? 'Set' : 'Not Set');
  
  try {
    // Initialize EmailJS
    emailjs.init(config.publicKey);
    console.log('\n✅ EmailJS initialized successfully');
    
    // Test sending with minimal data
    console.log('\n📨 Attempting to send test email...');
    const testParams = {
      from_name: 'Debug Test',
      from_email: 'test@debug.com',
      subject: 'EmailJS Debug Test',
      message: 'This is a debug test message',
      to_email: 'zafarquaere@gmail.com',
      to_name: 'Zafar Imam',
      reply_to: 'test@debug.com',
      current_date: new Date().toLocaleDateString(),
      current_time: new Date().toLocaleTimeString(),
    };
    
    const response = await emailjs.send(
      config.serviceId,
      config.templateId,
      testParams
    );
    
    console.log('✅ Email sent successfully!');
    console.log('Response:', response);
    
  } catch (error) {
    console.error('\n❌ Error occurred:');
    console.error('Error Type:', error.constructor.name);
    console.error('Error Message:', error.message);
    console.error('Error Status:', error.status);
    console.error('Error Text:', error.text);
    console.error('Full Error:', error);
    
    // Provide specific debugging advice
    console.log('\n💡 Debugging Tips:');
    if (error.status === 401) {
      console.log('- Authentication error: Check if your Public Key is correct');
      console.log('- Verify the key in EmailJS Dashboard > Account > General');
    } else if (error.status === 404) {
      console.log('- Service/Template not found: Check Service ID and Template ID');
      console.log('- Verify IDs in EmailJS Dashboard');
    } else if (error.status === 422) {
      console.log('- Invalid template parameters: Check your email template');
      console.log('- Ensure all {{variables}} in template match the parameters being sent');
    } else if (error.status === 400) {
      console.log('- Bad request: Check template configuration');
      console.log('- Verify "To email" field in template settings');
    } else if (error.text && error.text.includes('recipients address is empty')) {
      console.log('- CRITICAL: Your EmailJS template "To email" field is empty!');
      console.log('- FIX: Go to EmailJS Dashboard > Email Templates > Your Template');
      console.log('- Add "zafarquaere@gmail.com" to the "To email" field');
      console.log('- Save the template and try again');
    }
  }
  
  console.groupEnd();
};

// Export function to window for easy console access
if (typeof window !== 'undefined') {
  window.debugEmailJS = debugEmailJS;
}
