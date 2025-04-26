"use client";
import { staggerContainer } from "@/app/utils/motion";
import { motion, useInView } from "framer-motion";
import { useRef, type FC } from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";

const SectionWrapper = (Component: FC, idName: string,isUseInView?: boolean,isFullWidth?: boolean) => {
	return function HOC() {
		const sectionRef = useRef(null);
		const isMobile = useIsMobile();
		
		// If on mobile, we'll use a simpler approach with no repeated animations
		const isInView = useInView(sectionRef, { 
		  once: isMobile ||!isUseInView, // On mobile, only animate once (effectively disabling repeated animations)
		  amount: 0.15 // How much of the element needs to be in view
		});
		
		return (
			<motion.section
				variants={staggerContainer()}
				ref={sectionRef}
				initial="hidden"
				whileInView="show"
				// On mobile, always show the section once it's been animated once
				animate={isMobile ? "show" : (isInView ? "show" : "hidden")}
				exit="hidden"
				viewport={{ once: isMobile, amount: 0.25 }}
				className={`padding ${isFullWidth? "" : "max-w-7xl"} mx-auto relative z-0`}
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
