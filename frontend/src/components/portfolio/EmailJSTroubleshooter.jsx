import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EmailJSTroubleshooter = ({ onClose }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState(null);

  const checkConfiguration = async () => {
    setIsChecking(true);
    const checkResults = {
      configPresent: false,
      initSuccess: false,
      sendSuccess: false,
      error: null,
      details: {}
    };

    try {
      // Check configuration
      const config = {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ud6t0fe',
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_2atnnhe',
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'AFq2hXKaI0t37td-P',
      };

      checkResults.configPresent = !!(config.serviceId && config.templateId && config.publicKey);
      checkResults.details.config = config;

      // Try to initialize
      try {
        emailjs.init(config.publicKey);
        checkResults.initSuccess = true;
      } catch (initError) {
        checkResults.error = `Initialization failed: ${initError.message}`;
      }

      // Try to send test email
      if (checkResults.initSuccess) {
        try {
          const response = await emailjs.send(
            config.serviceId,
            config.templateId,
            {
              from_name: 'Configuration Test',
              from_email: 'test@config.com',
              subject: 'Configuration Test',
              message: 'Testing EmailJS configuration',
      to_email: 'zafarquaere@gmail.com',
      to_name: 'Zafar Imam',
      reply_to: 'test@config.com',
      current_date: new Date().toLocaleDateString(),
      current_time: new Date().toLocaleTimeString(),
            }
          );
          checkResults.sendSuccess = true;
          checkResults.details.response = response;
        } catch (sendError) {
          checkResults.error = `Send failed: ${sendError.text || sendError.message}`;
          checkResults.details.errorStatus = sendError.status;
          checkResults.details.errorText = sendError.text;
        }
      }
    } catch (error) {
      checkResults.error = `Unexpected error: ${error.message}`;
    }

    setResults(checkResults);
    setIsChecking(false);
  };

  const getErrorSolution = (status, errorText) => {
    // Check for specific error messages
    if (errorText && errorText.includes('recipients address is empty')) {
      return (
        <div>
          <p className="mb-2">Your EmailJS template is missing the recipient email configuration.</p>
          <p className="font-semibold">Fix:</p>
          <ol className="list-decimal list-inside ml-4 mt-1">
            <li>Go to EmailJS Dashboard → Email Templates</li>
            <li>Open your template (ID: template_2atnnhe)</li>
            <li>In the "To email" field, enter: <code className="bg-slate-800 px-2 py-1 rounded">zafarquaere@gmail.com</code></li>
            <li>Save the template and try again</li>
          </ol>
        </div>
      );
    }
    
    switch (status) {
      case 400:
        return 'Check your EmailJS template configuration. Make sure the "To email" field is properly set.';
      case 401:
        return 'Invalid Public Key. Verify your key in EmailJS Dashboard > Account > General.';
      case 404:
        return 'Service or Template not found. Check your Service ID and Template ID in the EmailJS dashboard.';
      case 422:
        return 'Template variables mismatch. Ensure your template uses the correct variable names.';
      default:
        return 'Unknown error. Check the EmailJS dashboard for more details.';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-emerald-500/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-emerald-400">EmailJS Troubleshooter</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            <XCircle size={24} />
          </button>
        </div>

        {!results && !isChecking && (
          <div className="text-center py-8">
            <p className="text-slate-300 mb-6">
              Click the button below to check your EmailJS configuration and identify any issues.
            </p>
            <button
              onClick={checkConfiguration}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Run Configuration Check
            </button>
          </div>
        )}

        {isChecking && (
          <div className="text-center py-8">
            <Loader className="animate-spin mx-auto text-emerald-400 mb-4" size={48} />
            <p className="text-slate-300">Checking configuration...</p>
          </div>
        )}

        {results && (
          <div className="space-y-6">
            {/* Configuration Status */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">Configuration Status</h4>
              
              <div className="flex items-center space-x-3">
                {results.configPresent ? (
                  <CheckCircle className="text-green-400" size={20} />
                ) : (
                  <XCircle className="text-red-400" size={20} />
                )}
                <span className="text-slate-300">Configuration values present</span>
              </div>

              <div className="flex items-center space-x-3">
                {results.initSuccess ? (
                  <CheckCircle className="text-green-400" size={20} />
                ) : (
                  <XCircle className="text-red-400" size={20} />
                )}
                <span className="text-slate-300">EmailJS initialization</span>
              </div>

              <div className="flex items-center space-x-3">
                {results.sendSuccess ? (
                  <CheckCircle className="text-green-400" size={20} />
                ) : (
                  <XCircle className="text-red-400" size={20} />
                )}
                <span className="text-slate-300">Email send test</span>
              </div>
            </div>

            {/* Error Details */}
            {results.error && (
              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-red-400 font-semibold mb-2">Error Detected</p>
                    <p className="text-slate-300 mb-3">{results.error}</p>
                    {results.details.errorStatus && (
                      <div className="text-slate-400 text-sm mt-2">
                        <p className="font-semibold mb-1">Solution:</p>
                        {getErrorSolution(results.details.errorStatus, results.details.errorText)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Configuration Details */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h5 className="text-emerald-400 font-semibold mb-3">Current Configuration</h5>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-slate-300">
                  Service ID: <span className="text-emerald-400">{results.details.config?.serviceId}</span>
                </p>
                <p className="text-slate-300">
                  Template ID: <span className="text-emerald-400">{results.details.config?.templateId}</span>
                </p>
                <p className="text-slate-300">
                  Public Key: <span className="text-emerald-400">
                    {results.details.config?.publicKey?.substring(0, 10)}...
                  </span>
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h5 className="text-emerald-400 font-semibold mb-3">Next Steps</h5>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Log in to your <a href="https://dashboard.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">EmailJS Dashboard</a></li>
                <li>Verify your Service ID in the Services section</li>
                <li>Check your Template ID in the Email Templates section</li>
                <li>Confirm your Public Key in Account → General</li>
                <li>Ensure your template has the correct variable names</li>
              </ol>
            </div>

            <button
              onClick={() => {
                setResults(null);
                checkConfiguration();
              }}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Run Check Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailJSTroubleshooter;
