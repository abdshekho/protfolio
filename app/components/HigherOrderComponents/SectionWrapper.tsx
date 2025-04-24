"use client";
import { staggerContainer } from "@/app/utils/motion";
import { motion, useInView } from "framer-motion";
import { useRef, type FC } from "react";

const SectionWrapper = (Component: FC, idName: string) => {
	return function HOC() {
		const sectionRef = useRef(null);
		const isInView = useInView(sectionRef, { 
		  once: false, // This is the key change - set to false to repeat animations
		  amount: 0.25 // How much of the element needs to be in view
		});
		return (
			<motion.section
				variants={staggerContainer()}
				ref={sectionRef}
				initial="hidden"
				whileInView="show"
				animate={isInView ? "show" : "hidden"}
				exit="hidden"
				viewport={{ once: true, amount: 0.25 }}
				className="padding max-w-7xl mx-auto relative z-0"
			>
				<span className="hash-span" id={idName}>
					{" "}
					&nbsp;{" "}
				</span>
				<Component />
			</motion.section>
		);
	};
};

export default SectionWrapper;
