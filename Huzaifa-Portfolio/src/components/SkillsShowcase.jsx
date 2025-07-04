import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const SkillsShowcase = () => {
  const containerRef = useRef(null);
  const skillsRef = useRef([]);

  const skills = [
    { name: "Next.js", level: 95, color: "#000000", bgColor: "#ffffff" },
    { name: "React.js", level: 92, color: "#61DAFB", bgColor: "#61DAFB" },
    { name: "TypeScript", level: 88, color: "#3178C6", bgColor: "#3178C6" },
    { name: "Three.js", level: 85, color: "#000000", bgColor: "#ffffff" },
    { name: "Sanity", level: 90, color: "#f03e2f", bgColor: "#f03e2f" },
    { name: "Python", level: 85, color: "#3776ab", bgColor: "#3776ab" },
    { name: "OpenAI SDK", level: 80, color: "#10a37f", bgColor: "#10a37f" },
    { name: "Streamlit", level: 75, color: "#ff4b4b", bgColor: "#ff4b4b" },
    { name: "Chainlit", level: 70, color: "#00d4aa", bgColor: "#00d4aa" },
    { name: "Firebase", level: 92, color: "#FFCA28", bgColor: "#FFCA28" },
    { name: "Tailwind CSS", level: 95, color: "#06B6D4", bgColor: "#06B6D4" },
    { name: "GSAP", level: 80, color: "#88ce02", bgColor: "#88ce02" },
  ];

  useEffect(() => {
    // Animate skill bars
    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        gsap.fromTo(
          skill.querySelector('.skill-bar'),
          { width: "0%" },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skill,
              start: "top 80%",
              end: "top 50%",
              scrub: false,
            },
          }
        );

        gsap.fromTo(
          skill,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: false,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-16">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 mb-12 text-center">
          <p className={`${styles.sectionSubText} text-gradient-secondary`}>Technical Expertise</p>
          <h2 className={`${styles.sectionHeadText} text-gradient-primary mb-4`}>Skills & Technologies</h2>
          <p className="text-secondary/90 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Proficiency levels in the technologies I use to create <span className="text-[#915EFF] font-medium">exceptional digital experiences</span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillsRef.current[index] = el)}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <span
                  className="font-bold text-sm"
                  style={{
                    color: skill.name === "Next.js" || skill.name === "Three.js"
                      ? "#915EFF"
                      : skill.bgColor
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              
              {/* Skill bar container */}
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/5">
                <div
                  className="skill-bar h-full rounded-full transition-all duration-300 relative"
                  style={{
                    background: skill.name === "Next.js" || skill.name === "Three.js"
                      ? `linear-gradient(90deg, #915EFF, #00cea8)`
                      : `linear-gradient(90deg, ${skill.bgColor}, ${skill.bgColor}80)`,
                    boxShadow: `0 0 15px ${skill.bgColor}60`,
                  }}
                >
                  {/* Inner glow effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: skill.name === "Next.js" || skill.name === "Three.js"
                        ? `linear-gradient(90deg, #915EFF, #00cea8)`
                        : `linear-gradient(90deg, ${skill.bgColor}, transparent)`,
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Skill description */}
              <p className="text-secondary/70 text-xs mt-2">
                {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"} level proficiency
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <div className="glass-card rounded-2xl p-6 inline-block">
            <p className="text-secondary/80 text-sm">
              <span className="text-[#00cea8] font-semibold">2+ years</span> of experience building modern web applications and
              <span className="text-[#915EFF] font-semibold"> AI-powered solutions</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SkillsShowcase, "skills");
