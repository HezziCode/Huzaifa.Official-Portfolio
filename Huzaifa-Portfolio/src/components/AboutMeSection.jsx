import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    // Animate the profile image
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: false,
        },
      }
    );

    // Animate the title
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: false,
        },
      }
    );

    // Animate the wave background
    gsap.fromTo(
      waveRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[600px] overflow-hidden"
    >
      {/* Enhanced Background with grid pattern and improved gradients */}
      <div
        ref={waveRef}
        className="absolute inset-0 bg-tertiary z-0 overflow-hidden grid-pattern"
        style={{
          background:
            "linear-gradient(135deg, #151030 0%, #0a0a1a 50%, #050816 100%)",
        }}
      >
        {/* Enhanced abstract wave elements with better positioning */}
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-full h-[40%] bg-[#915EFF] blur-[120px] rounded-full transform -translate-x-1/4 -translate-y-1/2 opacity-25 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[70%] h-[50%] bg-[#00cea8] blur-[140px] rounded-full transform translate-x-1/4 translate-y-1/4 opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-[60%] h-[40%] bg-[#ff6b6b] blur-[100px] rounded-full transform -translate-y-1/2 opacity-15"></div>

          {/* Additional floating elements for depth */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#915EFF] blur-[60px] rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[#00cea8] blur-[40px] rounded-full opacity-15"></div>
        </div>
      </div>

      {/* Enhanced About Me title with glassmorphism */}
      <div
        ref={titleRef}
        className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10"
      >
        <div className="glass-card-strong rounded-2xl p-4 sm:p-6 backdrop-blur-xl">
          <h2 className="text-gradient-primary text-3xl sm:text-4xl font-bold tracking-wider mb-2">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full glow-purple"></div>
          <p className="text-secondary/80 text-sm mt-2 font-medium">
            Crafting Digital Experiences
          </p>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        {/* Enhanced Profile image with glassmorphism frame */}
        <div
          ref={imageRef}
          className="relative flex-shrink-0 mt-12 sm:mt-0 group"
        >
          {/* Glassmorphism frame around image */}
          <div className="glass-card-strong p-3 sm:p-4 rounded-3xl hover-lift">
            <div className="relative w-52 h-52 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-[#915EFF]/40 shadow-2xl glow-purple">
              <img
                src="/src/assets/stylish.jpg"
                alt="Huzaifa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#915EFF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Floating status indicator */}
          <div className="absolute -top-2 -right-2 glass-card rounded-full p-2 border border-green-400/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced About text content with glassmorphism */}
        <div className="max-w-lg mt-6 md:mt-0 text-center md:text-left">
          <div className="glass-card rounded-3xl p-6 sm:p-8 hover-lift">
            {/* Name with enhanced styling */}
            <div className="mb-6">
              <h3 className="text-gradient-primary text-2xl sm:text-3xl font-bold mb-2">
                Muhammed Huzaifa
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="text-[#00cea8] text-sm font-semibold">
                  Full Stack Developer & Agentic AI Engineer
                </span>
                <div className="w-2 h-2 bg-[#00cea8] rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced description with better typography */}
            <p className="text-secondary/90 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Hi! I'm a{" "}
              <span className="text-gradient-secondary font-semibold">
                full-stack developer and Agentic AI engineer
              </span>{" "}
              who loves building solutions that make a difference. Using
              <span className="text-[#915EFF] font-medium">
                {" "}
                HTML, CSS, TypeScript, Next.js, MongoDB, Firebase, and Sanity
              </span>
              , I create fast, SEO-friendly websites. In AI, I build autonomous agents with
              <span className="text-[#00cea8] font-medium">
                {" "}
                Python, OpenAI's Agent SDK, Streamlit, and Chainlit
              </span>
              , turning ideas into reality.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              {[
                "Next.js",
                "React.js",
                "Python",
                "AI Agents",
                "Sanity",
                "Three.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="glass-card px-3 py-1 text-xs font-medium text-[#915EFF] rounded-full border border-[#915EFF]/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Enhanced buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-sm sm:text-base font-semibold"
              >
                Let's Connect
              </button>
              <button className="glass-card border border-[#915EFF]/30 py-2 px-4 sm:px-6 rounded-xl text-white font-medium hover:border-[#915EFF] hover:glow-purple transition-all duration-300 text-sm sm:text-base">
                <a
                  href="/src/assets/M_Huzaifa_Frontend_Developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button flex items-center gap-2"
                >
                  <span>View Resume</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMeSection, "about-me");
