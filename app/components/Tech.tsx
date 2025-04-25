"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{ technologies.map((technology) => (
				<div className="w-28 h-28" key={ technology.name }>
					<BallCanvas icon={ technology.icon } />
				</div>
			)) }
			<div className="mt-20 w-full flex justify-center items-center">
				<a href="#Projects">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={ { y: [0, 24, 0] } }
							transition={ {
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							} }
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
