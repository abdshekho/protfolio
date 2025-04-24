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

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
  index: number;
};

const ExperienceCard = ({ experience,index }: ExperienceCardProps) => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { 
    once: false,
    amount: 0.3
  });
  console.log(isTimelineInView)
  return (
    <div ref={timelineRef } id="experience-card" className="my-10">
    <VerticalTimelineElement
      position={index%2 === 0 ? "left" : "right" }
      visible={ isTimelineInView}
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
          className="text-secondary text-[16px] font-semibold"
          style={ { margin: 0 } }
        >
          { experience.company_name }
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        { experience.points.map((point, index) => (
            <li
              key={ `experience-point-${index}` }
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              { point }
            </li>
        )) }
      </ul>
    </VerticalTimelineElement></div>
  );
};

const Experience = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { 
    once: false,
    amount: 0.5
  });
  return (
    <>
      <motion.div  ref={headingRef} variants={ textVariant() }  animate={isHeadingInView ? "show" : "hidden"}>
        <p className="styles.sectionSubText text-center">
          What I have done so far
        </p>
        <h2 className="sectionHeadText text-center">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          { experiences.map((experience, index) => (
            <ExperienceCard
              key={ `experience-${index}` }
              experience={ experience } index={index}
            />
          )) }
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
