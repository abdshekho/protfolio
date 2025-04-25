"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { useState } from "react";

type FeedbackCardProps = {
	index: number;
	testimonial: string;
	name: string;
	link: string;
	image: string;
};

const FeedbackCard = ({
	index,
	testimonial,
	name,
	link,
	image,
}: FeedbackCardProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopyToClipboard = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault();
		e.stopPropagation();
		
		navigator.clipboard.writeText(link)
			.then(() => {
				setCopied(true);
				// Reset the copied state after 2 seconds
				setTimeout(() => setCopied(false), 2000);
			})
			.catch(err => {
				console.error('Failed to copy: ', err);
			});
	};

	return (
		<motion.div
			variants={fadeIn("", "spring", index * 0.5, 0.75)}
			className="bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full"
		>
			<div className="mt-1 ">
				<p className="text-white font-black sm:text-[35px] text-[25px]">{testimonial}</p>
				<div className="mt-7 flex justify-between items-center gap-1">
					<div className="flex-1 flex flex-col">
						<p className="text-white font-medium sm:text-[16px] text-[11px]  cursor-pointer" onClick={handleCopyToClipboard}>
							<span 
								className="blue-text-gradient cardOfsocial"
								
								title="Click to copy link"
							>
								@
							</span>
							{name} {copied && <span className="text-green-400 text-xs ml-2 block">Link copied!</span>}
						</p>
					</div>
					<Link href={link} target="_blanck">
						<Image
							src={image}
							width={40}
							height={40}
							alt={`feedback by ${name}`}
							className="w-10 h-10 rounded-full object-cover "
						/>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

const Feedbacks = () => {
	return (
		<div className="mt-12  bg-tertiary rounded-[20px]">
			<div className="padding bg-black-100 rounded-2xl min-h-[300px]">
				<motion.div variants={textVariant()}>
					<p className="sectionSubText main-gradient">
						Click on social media icons to check out..
					</p>
					<h2 className="sectionHeadText">Social Profiles</h2>
				</motion.div>
			</div>
			<div className="paddingX -mt-20 pb-14 flex flex-wrap gap-7">
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.id} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "");
