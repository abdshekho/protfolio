"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { useRef } from "react";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	const cardRef = useRef(null);
	const isCardInView = useInView(cardRef, {
		once: false,
		amount: 0.3
	});

	return (
		<>
			<Tilt
				options={ { max: 45, scale: 1, speed: 450 } }
				className="xs:w-[250px] w-full"
			>
				<motion.div
					ref={ cardRef }
					variants={ textVariant() }
					initial="hidden"
					animate={ isCardInView ? "show" : "hidden" }
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={ icon }
							width={ 64 }
							height={ 64 }
							alt={ title }
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] font-bold text-center">
							{ title }
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	const textRef = useRef(null);
	const isTextInView = useInView(textRef, {
		once: false,
		amount: 0.5
	});

	const paragraphRef = useRef(null);
	const isParagraphInView = useInView(paragraphRef, {
		once: false,
		amount: 0.5
	});

	return (
		<>
			<motion.div
				ref={ textRef }
				variants={ textVariant() }
				initial="hidden"
				animate={ isTextInView ? "show" : "hidden" }
			>
				<p className="sectionSubText">Introduction</p>
				<h2 className="styles.sectionHeadText">Overview.</h2>
			</motion.div>

			<motion.p
				ref={ paragraphRef }
				variants={ fadeIn("", "", 0.1, 1) }
				initial="hidden"
				animate={ isParagraphInView ? "show" : "hidden" }
				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
			>
				I am a passionate Front-End Web Developer with a strong focus on crafting dynamic, responsive, and user-friendly web applications. Over the years, I have honed my skills in modern JavaScript frameworks such as React and Angular , allowing me to build highly interactive and visually appealing interfaces that deliver an exceptional user experience.

				In addition to my front-end expertise, I have gained solid experience in Back-End Development using Node.js and its powerful framework NestJS . This has enabled me to develop scalable and efficient server-side solutions, ensuring seamless communication between the front-end and back-end layers of web applications.

				As someone who is deeply curious about web security, I also enjoy exploring web vulnerabilities as a hobby. While my primary focus remains on development, understanding potential security flaws helps me write more robust and secure code, adding an extra layer of value to my projects.

				With a combination of technical proficiency, hands-on experience, and a continuous drive to learn, I strive to create innovative solutions that not only meet but exceed client expectations. Whether it&apos;s building cutting-edge applications or diving into the intricacies of web security, I am always eager to take on new challenges and grow both personally and professionally.

			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{ services.map((service, index) => (
					<ServiceCard key={ service.title } index={ index } { ...service } />
				)) }
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
