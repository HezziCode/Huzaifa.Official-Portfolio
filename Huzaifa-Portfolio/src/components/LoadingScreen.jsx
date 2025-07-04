import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing AI Systems...",
    "Loading Portfolio Data...",
    "Preparing Interactive Elements...",
    "Optimizing User Experience...",
    "Almost Ready..."
  ];

  useEffect(() => {
    // Simulate realistic loading with variable speed
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        // Variable loading speed for more realistic feel
        const increment = prev < 30 ? 3 : prev < 70 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    // Change loading text based on progress
    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const nextIndex = (prev + 1) % loadingTexts.length;
        return nextIndex;
      });
    }, 1200);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete, loadingTexts.length]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #151030 0%, #0a0a1a 50%, #050816 100%)",
        }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#915EFF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Logo/Brand */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-card-strong rounded-3xl p-6 inline-block">
              <h1 className="text-gradient-primary text-3xl font-bold mb-2">
                Huzaifa
              </h1>
              <p className="text-secondary text-sm">
                Full Stack Developer & AI Engineer
              </p>
            </div>
          </motion.div>

          {/* Loading Animation */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Circular Progress */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={283}
                  strokeDashoffset={283 - (283 * progress) / 100}
                  transition={{ duration: 0.1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#915EFF" />
                    <stop offset="100%" stopColor="#00cea8" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Progress Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-bold">{progress}%</span>
              </div>
            </div>

            {/* Loading Text */}
            <motion.p
              key={currentText}
              className="text-secondary text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingTexts[currentText]}
            </motion.p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            className="w-full bg-white/10 rounded-full h-2 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Pulsing Dots */}
          <motion.div
            className="flex justify-center gap-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#915EFF] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
