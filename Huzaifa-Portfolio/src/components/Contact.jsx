import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, zoomIn } from "../utils/motion";
import { sendEmail, checkEmailConfig } from "../services/emailService";
import ErrorBoundary from "./ErrorBoundary";

// Success Popup Component
const SuccessPopup = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup Content */}
          <motion.div
            className="bg-tertiary rounded-xl p-5 sm:p-8 max-w-md w-full mx-auto relative z-10 shadow-xl border border-secondary/20"
            variants={zoomIn(0.1, 0.6)}
            initial="hidden"
            animate="show"
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="text-center">
              {/* Success Icon */}
              <div className="mx-auto flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-500/20 mb-3 sm:mb-4">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-secondary text-sm sm:text-lg mb-4 sm:mb-6">
                I will get back to you as soon as possible.
              </p>

              <button
                onClick={onClose}
                className="bg-primary py-2 sm:py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mx-auto block hover:bg-black-200 transition-colors text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errors, setErrors] = useState({});

  // Check email configuration on component mount
  useEffect(() => {
    const config = checkEmailConfig();
    if (!config.configured) {
      console.error("EmailJS configuration error:", config.error);
    } else {
      console.log("EmailJS configuration status:", config);
    }
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const result = await sendEmail(form);

      if (result.success) {
        // Show success popup
        setShowSuccessPopup(true);

        // Reset form
        setForm({
          name: "",
          email: "",
          message: "",
        });

        // Clear any remaining errors
        setErrors({});
      } else {
        // Show error message
        alert(result.message);
      }
    } catch (error) {
      console.error("Email sending error:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to close the success popup
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 sm:gap-10 overflow-hidden`}
    >
      {/* Success Popup */}
      <SuccessPopup
        isVisible={showSuccessPopup}
        onClose={closeSuccessPopup}
      />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] glass-card-strong p-4 sm:p-6 md:p-8 rounded-3xl hover-lift'
      >
        <p className={`${styles.sectionSubText} text-gradient-secondary`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-gradient-primary mb-2`}>Contact.</h3>
        <p className="text-secondary/80 text-sm mb-6">Let's create something amazing together</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 sm:mt-12 flex flex-col gap-5 sm:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4 flex items-center gap-2'>
              <span>Your Name</span>
              <span className="text-[#915EFF] text-xs">*</span>
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`glass-card py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary/70 text-white rounded-xl outline-none border font-medium text-sm sm:text-base transition-all duration-300 ${
                errors.name
                  ? 'border-red-500 focus:border-red-500 focus:glow-red'
                  : 'border-white/10 focus:border-[#915EFF] focus:glow-purple'
              }`}
            />
            {errors.name && (
              <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.name}
              </span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4 flex items-center gap-2'>
              <span>Your Email</span>
              <span className="text-[#915EFF] text-xs">*</span>
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`glass-card py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary/70 text-white rounded-xl outline-none border font-medium text-sm sm:text-base transition-all duration-300 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:glow-red'
                  : 'border-white/10 focus:border-[#915EFF] focus:glow-purple'
              }`}
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenOdd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenOdd" />
                </svg>
                {errors.email}
              </span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4 flex items-center gap-2'>
              <span>Your Message</span>
              <span className="text-[#915EFF] text-xs">*</span>
            </span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`glass-card py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary/70 text-white rounded-xl outline-none border font-medium text-sm sm:text-base transition-all duration-300 resize-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-500 focus:glow-red'
                  : 'border-white/10 focus:border-[#915EFF] focus:glow-purple'
              }`}
            />
            {errors.message && (
              <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenOdd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenOdd" />
                </svg>
                {errors.message}
              </span>
            )}
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn-primary text-sm sm:text-base font-semibold mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Enhanced contact info section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 flex flex-col justify-center'
      >
        <div className="glass-card rounded-3xl p-6 sm:p-8 hover-lift">
          <h3 className="text-gradient-primary text-2xl font-bold mb-6">Let's Connect</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#915EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-secondary text-sm">yesshuzaifa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#00cea8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-secondary text-sm">Available for Remote Work</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#ff6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Response Time</p>
                <p className="text-secondary text-sm">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 glass-card rounded-2xl">
            <p className="text-secondary/80 text-sm text-center">
              Ready to build something amazing together? <br/>
              <span className="text-gradient-secondary font-medium">Let's turn your ideas into reality!</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
