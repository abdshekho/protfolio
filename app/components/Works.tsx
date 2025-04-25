"use client";
import { motion, useInView, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
	isMobile: boolean; // Add isMobile prop
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform,
	isMobile
}: ProjectCardProps) => {
	// If mobile, don't use motion.div wrapper
	return isMobile ? (
		<div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
			<div className="relative w-full h-[230px]">
				<Image
					src={image}
					width={1000}
					height={1000}
					alt="project_image"
					className="w-full h-full object-cover rounded-2xl"
				/>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					{source_code_link && <Link
						href={source_code_link}
						target="_blank"
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<Image
							src="/tech/github.webp"
							width={24}
							height={24}
							alt="source-code"
							className="object-contain"
						/>
					</Link>}
					<Link
						href={deploy_link}
						target="_blank"
						className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
					>
						<Image
							src={platform === "Netlify" ? "/tech/netlify.webp" : platform === "Vercel" ? "/tech/vercel.svg" : platform === "Wordpress" ? "/tech/wordpress.webp" : platform === "Web" ? "/web.webp" : "/tech/figma.webp"}
							width={24}
							height={24}
							alt="source code"
							className="object-contain"
						/>
					</Link>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p
						key={`${name}-${tag.name}`}
						className={`text-[14px] ${tag.color}`}
					>
						#{tag.name}
					</p>
				))}
			</div>
		</div>
	) : (
		// Use motion.div and Tilt for desktop
		<div>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 150,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
			>
				<div className="relative w-full h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link && <Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>}
						<Link
							href={deploy_link}
							target="_blank"
							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src={platform === "Netlify" ? "/tech/netlify.webp" : platform === "Vercel" ? "/tech/vercel.svg" : platform === "Wordpress" ? "/tech/wordpress.webp" : platform === "Web" ? "/web.webp" : "/tech/figma.webp"}
								width={24}
								height={24}
								alt="source code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</div>
	);
};

const Works = () => {
	// Add mobile detection
	const [isMobile, setIsMobile] = useState(false);
	
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	
	return (
		<>
			{isMobile ? (
				// Static version for mobile (no animations)
				<div>
					<p className="sectionSubText main-gradient">My latest work</p>
					<h2 className="sectionHeadText">Projects.</h2>
				</div>
			) : (
				// Animated version for desktop
				<motion.div variants={textVariant()}>
					<p className="sectionSubText main-gradient">My latest work</p>
					<h2 className="sectionHeadText">Projects.</h2>
				</motion.div>
			)}

			<div className="w-full flex">
				{isMobile ? (
					// Static version for mobile
					<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
						Following projects showcases my skills and experience through
						real-world examples of my work. Each project is briefly described with
						links to code repositories and live demos in it. It reflects my
						ability to solve complex problems, work with different technologies,
						and manage projects effectively.
					</p>
				) : (
					// Animated version for desktop
					<motion.p
						variants={fadeIn("", "", 0.1, 1)}
						className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
					>
						Following projects showcases my skills and experience through
						real-world examples of my work. Each project is briefly described with
						links to code repositories and live demos in it. It reflects my
						ability to solve complex problems, work with different technologies,
						and manage projects effectively.
					</motion.p>
				)}
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard 
						key={`project-${index}`} 
						index={index} 
						{...project} 
						isMobile={isMobile}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "Projects",false);
