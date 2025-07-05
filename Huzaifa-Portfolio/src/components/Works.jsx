import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github, externalLink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating project cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <a
        href={live_demo_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="glass-card-strong p-4 sm:p-5 rounded-3xl w-full max-w-[360px] mx-auto relative group cursor-pointer hover-lift glow-purple"
        >
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-110"
          />

          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover z-10">
            {/* Enhanced GitHub Repository Link */}
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:glow-purple transition-all duration-300 border border-white/20"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
              />
            </a>
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <div className="flex items-center">
            <h3 className="text-white font-bold text-[18px] xs:text-[20px] sm:text-[24px] line-clamp-1">{name}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 ml-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <p className="mt-2 text-secondary text-[12px] sm:text-[14px] line-clamp-3">{description}</p>
        </div>

        {/* Hover overlay with "View Project" text */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
          <div className="bg-white/20 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <p className="text-white text-lg sm:text-xl font-bold">View Project</p>
          <p className="text-secondary text-xs sm:text-sm mt-1">Click to open live demo</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`glass-card px-3 py-1 text-xs font-medium rounded-full border border-white/10 ${tag.color} hover:glow-teal transition-all duration-300`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </Tilt>
      </a>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Stagger delay of 0.3 seconds between each card
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",  // Trigger when the top of the container reaches the bottom
          end: "top center",
          scrub: true,
          markers: false, // Set to true to see debug markers
        },
      }
    );
  }, []);

  return (
    <section id="projects">
      <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8">
        <p className={`${styles.sectionSubText} text-gradient-secondary`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-gradient-primary mb-4`}>Projects.</h2>

        <div className="w-full flex">
          <p className="text-secondary/90 text-base sm:text-[17px] max-w-3xl leading-relaxed font-light">
            Following projects showcase my <span className="text-[#915EFF] font-medium">skills and experience</span> through
            real-world examples of my work. Each project features <span className="text-[#00cea8] font-medium">live demos and source code</span>,
            reflecting my ability to solve complex problems and work with modern technologies.
          </p>
        </div>
      </div>

      <div className="works-container mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 sm:gap-5 px-2 sm:px-0">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card w-full">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
