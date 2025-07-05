import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden`}>
      {/* Floating particles - reduced on mobile */}
      <div className="absolute inset-0 z-0">
        <div className="hidden mobile-lg:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#915EFF] rounded-full animate-bounce opacity-60"></div>
        <div className="hidden sm:block absolute top-1/3 right-1/3 w-1 h-1 bg-[#00cea8] rounded-full animate-pulse opacity-40"></div>
        <div className="hidden mobile-lg:block absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#915EFF] rounded-full animate-ping opacity-30"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/4 w-1 h-1 bg-[#00cea8] rounded-full animate-bounce opacity-50"></div>
        <div className="hidden mobile-lg:block absolute bottom-1/3 right-1/2 w-2 h-2 bg-[#915EFF] rounded-full animate-pulse opacity-20"></div>
      </div>

      <div
        className={`absolute inset-0 top-[80px] mobile-lg:top-[90px] sm:top-[100px] md:top-[120px] ${styles.mobileContainer} ${styles.paddingX} flex flex-col sm:flex-row items-start gap-4 mobile-lg:gap-5 sm:gap-6 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-8 mobile-lg:mt-12 sm:mt-16 md:mt-20 lg:mt-5 order-2 sm:order-1'>
          <div className='w-3 h-3 mobile-lg:w-4 mobile-lg:h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-0.5 mobile-lg:w-1 h-16 mobile-lg:h-20 xs:h-24 sm:h-32 md:h-40 lg:h-80 violet-gradient' />
        </div>

        <div className="mt-8 mobile-lg:mt-12 sm:mt-16 md:mt-20 lg:mt-5 order-1 sm:order-2 text-center sm:text-left px-2 mobile-lg:px-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-gradient-primary'>Huzaifa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 mobile-lg:mt-3 sm:mt-4 text-white-100/90 max-w-3xl`}>
            I develop <span className="text-gradient-secondary font-semibold">intelligent AI agents</span> and <br className="hidden sm:block"/>
            <span className="sm:hidden"> </span>full-stack web applications
          </p>

          {/* Enhanced subtitle - better mobile layout */}
          <div className="mt-3 mobile-lg:mt-4 sm:mt-6 flex items-center justify-center sm:justify-start gap-2 mobile-lg:gap-3 flex-wrap">
            <div className="w-6 mobile-lg:w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#00cea8]"></div>
            <p className="text-secondary text-[10px] mobile-lg:text-xs sm:text-sm font-medium text-center sm:text-left">
              Full Stack Developer & Agentic AI Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced background elements - optimized for mobile */}
      <div className="absolute inset-0 z-0">
        {/* Reduced blur effects on mobile for better performance */}
        <div className="hidden sm:block absolute top-1/3 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-[#915EFF] blur-[60px] sm:blur-[80px] rounded-full opacity-15 sm:opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-1/3 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-[#00cea8] blur-[40px] sm:blur-[60px] rounded-full opacity-20 sm:opacity-25 animate-bounce"></div>
      </div>

      <div className='absolute bottom-6 mobile-lg:bottom-8 xs:bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-32 w-full flex justify-center items-center z-10'>
        <a
          href="#about-me"
          onClick={(e) => {
            e.preventDefault();
            const aboutMeSection = document.getElementById('about-me');
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className='w-[28px] h-[50px] xs:w-[32px] xs:h-[58px] sm:w-[35px] sm:h-[64px] rounded-3xl border-3 sm:border-4 border-secondary flex justify-center items-start p-1.5 sm:p-2 cursor-pointer hover:border-[#915EFF] transition-colors duration-300'>
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
