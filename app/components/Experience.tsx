"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { slideIn, textVariant } from "@/app/utils/motion";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useIsMobile } from "@/app/hooks/useIsMobile";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
  index: number;
  isMobile: boolean;
};

const ExperienceCard = ({ experience, index, isMobile }: ExperienceCardProps) => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { 
    once: isMobile, // If mobile, only animate once (effectively disabling repeated animations)
    amount: 0.3
  });
  
  return (
    <div ref={timelineRef} id="experience-card" className="my-10">
    <VerticalTimelineElement
      position={index%2 === 0 ? "left" : "right" }
      visible={isMobile ? true : isTimelineInView} // Always visible on mobile
      className=""
      contentStyle={ {
        background: "#195568",
        color: "#fff",
      } }
      contentArrowStyle={ { borderRight: "7px solid  #195568" } }
      date={ experience.date }
      iconStyle={ { background: experience.iconBg } }
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={ experience.icon }
            width={ 48 }
            height={ 48 }
            alt={ experience.company_name }
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{ experience.title }</h3>
        <p
          className="main-gradient text-[16px] font-semibold"
          style={ { margin: 0 } }
        >
          { experience.company_name }
        </p>
      </div>

      <ul className="mt-5 list-disc sm:ml-5 ml-2 space-y-2">
        { experience.points.map((point, index) => (
            <li
              key={ `experience-point-${index}` }
              className="text-white-100 sm:text-[14px] text-[12px] pl-1 tracking-wider"
            >
              { point }
            </li>
        )) }
      </ul>
    </VerticalTimelineElement></div>
  );
};

const Experience = () => {
  const isMobile = useIsMobile();
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { 
    once: isMobile, // If mobile, only animate once
    amount: 0.5
  });
  
  return (
    <>
      <motion.div 
        ref={headingRef} 
        variants={textVariant()} 
        animate={isMobile ? "show" : (isHeadingInView ? "show" : "hidden")}
      >
        <p className="styles.sectionSubText main-gradient-center text-center">
          What I have done so far
        </p>
        <h2 className="sectionHeadText text-center">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          { experiences.map((experience, index) => (
            <ExperienceCard
              key={ `experience-${index}` }
              experience={ experience } 
              index={index}
              isMobile={isMobile}
            />
          )) }
        </VerticalTimeline>
      </div>
      <div className="mt-20 w-full flex justify-center items-center">
        <a href="#Projects">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={isMobile ? {} : { y: [0, 24, 0] }}
              transition={isMobile ? {} : {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              style={isMobile ? { marginTop: '24px' } : {}}
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
