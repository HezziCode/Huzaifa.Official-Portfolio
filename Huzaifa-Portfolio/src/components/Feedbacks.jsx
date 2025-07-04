import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  // Use a `ref` to apply GSAP animations
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // Add the ScrollTrigger animation with GSAP
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Initial position off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom", // Trigger when the top of the element reaches the bottom of the viewport
          end: "top center",   // End the animation when the top reaches the center
          scrub: true,         // Link the animation progress to the scroll position
          markers: false,      // Set to true if you want to see the markers for debugging
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="glass-card-strong p-6 sm:p-8 md:p-10 rounded-3xl w-full max-w-[320px] sm:max-w-[360px] mx-auto hover-lift"
    >
      <p className="text-gradient-primary font-black text-[32px] sm:text-[40px] md:text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white/90 tracking-wider text-sm sm:text-base md:text-[18px] leading-relaxed">
          {testimonial}
        </p>

        <div className="mt-5 sm:mt-7 flex justify-between items-center gap-3">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-sm sm:text-[16px]">
              <span className="text-gradient-secondary">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-xs sm:text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#915EFF]/30"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-8 sm:mt-12 px-4 sm:px-6`}>
      <div className="glass-card-strong rounded-3xl p-6 sm:p-8 mb-8 text-center">
        <p className={`${styles.sectionSubText} text-gradient-secondary`}>What others say</p>
        <h2 className={`${styles.sectionHeadText} text-gradient-primary mb-4`}>Testimonials.</h2>
        <p className="text-secondary/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          Feedback from <span className="text-[#915EFF] font-medium">clients and colleagues</span> I've worked with
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 justify-items-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
