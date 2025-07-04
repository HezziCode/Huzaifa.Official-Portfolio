import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "24px",
        color: "#fff",
        padding: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.15)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        border: "3px solid #915EFF",
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.3)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] sm:w-[80%] sm:h-[80%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div className="mb-4">
        <h3 className='text-gradient-primary text-lg sm:text-xl md:text-[24px] font-bold leading-tight'>
          {experience.title}
        </h3>
        <p
          className='text-[#00cea8] text-sm sm:text-[16px] font-semibold mt-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-3 sm:mt-5 list-disc ml-3 sm:ml-5 space-y-1 sm:space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100/90 text-xs sm:text-sm md:text-[14px] pl-1 tracking-wide leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="px-4 sm:px-6">
      <motion.div variants={textVariant()}>
        <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8 text-center">
          <p className={`${styles.sectionSubText} text-gradient-secondary`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-gradient-primary mb-4`}>
            Work Experience.
          </h2>
          <p className="text-secondary/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            My professional journey in <span className="text-[#915EFF] font-medium">full-stack development</span> and
            <span className="text-[#00cea8] font-medium"> AI engineering</span>
          </p>
        </div>
      </motion.div>

      <div className='mt-8 sm:mt-12 md:mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
