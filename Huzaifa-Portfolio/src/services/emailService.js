import emailjs from "@emailjs/browser";

// Email service configuration
const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};

// Validate environment variables
const validateConfig = () => {
  const { serviceId, templateId, publicKey } = EMAIL_CONFIG;
  
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
  }
  
  return true;
};

// Initialize EmailJS
const initializeEmailJS = () => {
  try {
    validateConfig();
    emailjs.init(EMAIL_CONFIG.publicKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};

// Sanitize form data
const sanitizeFormData = (formData) => {
  const sanitized = {};
  
  // Remove any potentially harmful content
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'string') {
      // Basic sanitization - remove script tags and trim whitespace
      sanitized[key] = formData[key]
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .trim();
    } else {
      sanitized[key] = formData[key];
    }
  });
  
  return sanitized;
};

// Validate form data
const validateFormData = (formData) => {
  const errors = {};
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Rate limiting (simple client-side implementation)
let lastEmailSent = 0;
const RATE_LIMIT_MS = 60000; // 1 minute

const checkRateLimit = () => {
  const now = Date.now();
  if (now - lastEmailSent < RATE_LIMIT_MS) {
    const remainingTime = Math.ceil((RATE_LIMIT_MS - (now - lastEmailSent)) / 1000);
    throw new Error(`Please wait ${remainingTime} seconds before sending another message.`);
  }
  return true;
};

// Main email sending function
export const sendEmail = async (formData) => {
  try {
    // Initialize EmailJS if not already done
    if (!initializeEmailJS()) {
      throw new Error('Email service is not properly configured');
    }
    
    // Check rate limiting
    checkRateLimit();
    
    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      throw new Error('Form validation failed', { cause: validation.errors });
    }
    
    // Sanitize form data
    const sanitizedData = sanitizeFormData(formData);
    
    // Prepare email template parameters
    const templateParams = {
      from_name: sanitizedData.name,
      to_name: "Muhammad Huzaifa",
      from_email: sanitizedData.email,
      to_email: "yesshuzaifa@gmail.com",
      message: sanitizedData.message,
      timestamp: new Date().toISOString(),
    };
    
    // Send email
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
    
    // Update rate limiting
    lastEmailSent = Date.now();
    
    return {
      success: true,
      message: 'Email sent successfully!',
      response
    };
    
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Return user-friendly error messages
    let userMessage = 'Failed to send email. Please try again later.';
    
    if (error.message.includes('rate limit') || error.message.includes('wait')) {
      userMessage = error.message;
    } else if (error.message.includes('validation')) {
      userMessage = 'Please check your form data and try again.';
    } else if (error.message.includes('configuration')) {
      userMessage = 'Email service is temporarily unavailable.';
    }
    
    return {
      success: false,
      message: userMessage,
      error: process.env.NODE_ENV === 'development' ? error : undefined
    };
  }
};

// Export configuration checker for debugging
export const checkEmailConfig = () => {
  try {
    validateConfig();
    return {
      configured: true,
      serviceId: EMAIL_CONFIG.serviceId ? '✓' : '✗',
      templateId: EMAIL_CONFIG.templateId ? '✓' : '✗',
      publicKey: EMAIL_CONFIG.publicKey ? '✓' : '✗',
    };
  } catch (error) {
    return {
      configured: false,
      error: error.message
    };
  }
};

export default { sendEmail, checkEmailConfig };
