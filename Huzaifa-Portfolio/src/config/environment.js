// Environment configuration
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Application configuration
export const config = {
  // Environment
  isDevelopment,
  isProduction,
  
  // Application info
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Huzaifa Portfolio',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Full Stack Developer & Agentic AI Engineer Portfolio',
    url: import.meta.env.VITE_APP_URL || 'https://your-domain.com',
    author: import.meta.env.VITE_APP_AUTHOR || 'Muhammad Huzaifa',
  },
  
  // EmailJS configuration
  emailjs: {
    serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  },
  
  // Performance settings
  performance: {
    enableAnalytics: isProduction,
    enableErrorReporting: isProduction,
    enableServiceWorker: isProduction,
    lazyLoadImages: true,
    preloadCriticalAssets: true,
  },
  
  // Feature flags
  features: {
    enableContactForm: true,
    enable3DAnimations: true,
    enableParticleEffects: true,
    enableSmoothScrolling: true,
  },
  
  // API endpoints (if needed in future)
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
  },
  
  // Social links
  social: {
    github: 'https://github.com/your-github',
    linkedin: 'https://linkedin.com/in/your-linkedin',
    twitter: 'https://twitter.com/your-twitter',
    email: 'yesshuzaifa@gmail.com',
  },
};

// Validation function
export const validateConfig = () => {
  const errors = [];
  
  // Check required EmailJS configuration
  if (!config.emailjs.serviceId) {
    errors.push('VITE_APP_EMAILJS_SERVICE_ID is required');
  }
  if (!config.emailjs.templateId) {
    errors.push('VITE_APP_EMAILJS_TEMPLATE_ID is required');
  }
  if (!config.emailjs.publicKey) {
    errors.push('VITE_APP_EMAILJS_PUBLIC_KEY is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Log configuration in development
if (isDevelopment) {
  console.log('🔧 Application Configuration:', config);
  
  const validation = validateConfig();
  if (!validation.isValid) {
    console.warn('⚠️ Configuration Issues:', validation.errors);
  } else {
    console.log('✅ Configuration is valid');
  }
}

export default config;
