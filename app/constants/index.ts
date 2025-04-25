export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Experiences",
	},
	{
		id: "Projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "back-end developer",
		icon: "/backend.webp",
	},
	{
		title: "Front-end developer",
		icon: "/web.webp",
	},
	{
		title: "Web penetration tester",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	// {
	// 	name: "git",
	// 	icon: "/tech/git.webp",
	// },
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "angular",
		icon: "/tech/angular.webp",
	},
	{
		name: "nodejs",
		icon: "/tech/nodejs.webp",
	},
	{
		name: "nestjs",
		icon: "/tech/nestjs.webp",
	},
	{
		name: "redis",
		icon: "/tech/redis.webp",
	},
];

const experiences = [
	{
		title: "React Developer",
		company_name: "Future code",
		icon: "/company/futurecode.jpeg",
		iconBg: "#101f41",
		date: "Feb 2021 -Jul  2022",
		points: [
			"Determining the design and layout of web applications with accuracy.",
			"Developing +10 web applications by using responsive with UI elements via react concept for smooth performance.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using React.",
			// "Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website."
		],
	},
	{
		title: "Angulara Developer",
		company_name: "Focus for trading & contracting",
		icon: "/company/focus.jpeg",
		iconBg: "#fefefe",
		date: "Aug 2022 -Oct 2023",
		points: [
			"Building reusable components in React to Enhance the project structure.",
			"utilizing Material UI libraries for optimal Material Design and customizations.",
			"reducing bundle size in the project. Skilled in using Git for version control, demonstrating strong collaboration skills and effective teamwork within diverse development environments",
			"Good in utilizing Git for version control, demonstrating strong collaboration skills and effective teamwork within diverse development environments."
		],
	},
	{
		title: "React Developer",
		company_name: "TechnoPlus",
		icon: "/company/TechnoPlus.jpeg",
		iconBg: "#000310",
		date: "Nov 2023 - Jul 2024",
		points: [
			"Enhancing the React framework structure for the TechnoPlus project.",
			"Working with Redux to manage state and handle asynchronous operations within the application.",
			"Utilizing Material UI to implement modern interface design concepts",
			"Design Maintainence and hosting maintenance.",
		],
	},
	{
		title: "Angular Developer",
		company_name: "Wizme",
		icon: "/company/wizme.jpeg",
		iconBg: "#fdfdfd",
		date: "JUL 2024 - Present",
		points: [
			"Enhancing the React framework structure for the TechnoPlus project.",
			"Working with Redux to manage state and handle asynchronous operations within the application.",
			"Utilizing Material UI to implement modern interface design concepts",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Email",
		name: "abd.shkeho25@gmail.com",
		image: "/socialmedia/gmail.svg",
		link: "mailto:abd.shkeho25@gmail.com",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn",
		name: "abd-shekho",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/abd-shekho/",
	},
	{
		id: 3,
		testimonial:
			"Phone",
		name: "+963953679641",
		image: "/socialmedia/phone.svg",
		link: "tel:[+963953679641]",
	},
	{
		id: 4,
		testimonial:
			"Telegram",
		name: "abd1shekho",
		image: "/socialmedia/telegram.svg",
		link: "https://t.me/abd1shekho",
	},
	{
		id: 5,
		testimonial:
			"Github",
		name: "abdshekho",
		image: "/tech/github.webp",
		link: "https://github.com/abdshekho",
	},
	{
		id: 6,
		testimonial:
			"Whatsapp",
		name: "+963953679641",
		image: "/socialmedia/whatsapp.svg",
		link: "https://api.whatsapp.com/send?phone=+9639536796418&text=%22",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "Wizme",
		description:
			`Working at Wizme on a global booking system, leveraging Angular along with advanced and powerful modern technologies to build and enhance scalable, user-friendly interfaces that streamline booking processes and improve user experience`,
		tags: [
			{
				name: "Angular",
				color: "orange-text-gradient",
			},
			{
				name: "NgRx",
				color: "purp-text-gradient",
			},
			{
				name: "Rxjs",
				color: "green-text-gradient",
			},
			{
				name: "Sass",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/wizme.jpg",
		platform: "Web",
		deploy_link: "https://wizme.com/",
	},
	{
		name: "My-communication",
		description:
			"My-Communication is a leading training organization specializing in delivering high-quality courses and workshops, advanced security, etc. It has a beautiful interface made using Tailwind CSS and Nextjs",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/my-communication.jpg",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://my-communication.com/",
	},
	{
		name: "MERN Dashboard",
		description:
			"Building more than 20 Dashboard to control and monitor mobile and web applications",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Angular",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Nestjs",
				color: "pink-text-gradient",
			},
			{
				name: "Nextjs",
				color: "black-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "",
		platform: "Netlify",
		deploy_link: "",
	},
	{
		name: "Metaverse Web 3.0",
		description:
			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "",
		platform: "Vercel",
		deploy_link: "https://project-metaverse-beta.vercel.app/",
	},
	{
		name: "Syrina e-commarce",
		description:
			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "Nestjs",
				color: "pink-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/e-commarce.jpg",
		source_code_link: "",
		platform: "Vercel",
		deploy_link: "https://syrian-e-commerce.vercel.app/",
	},
	
	{
		name: "White bright",
		description:
		"White Bright is a premier cleaning services company dedicated to delivering exceptional cleanliness and hygiene solutions for residential, commercial, and industrial spaces",
			// "A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "Next",
				color: "black-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
			{
				name: "Nestjs",
				color: "pink-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/white-bright.jpg",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://www.white-bright.nl/",
	},
	{
		name: "Free elec",
		description:
			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "shadCN",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/free-elec.jpg",
		source_code_link: "",
		platform: "Vercel",
		deploy_link: "https://abdshekho.github.io/Free-Elec/index.html",
	},
	{
		name: "Wizme widget",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Angular.",
		tags: [
		
			{
				name: "Angular",
				color: "orange-text-gradient",
			},
			{
				name: "Rxjs",
				color: "green-text-gradient",
			},
			{
				name: "Sass",
				color: "pink-text-gradient",
			},
			{
				name: "NgRx",
				color: "purp-text-gradient",
			},
		],
		image: "/projectimg/wizmeWidget.jpg",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://integ-venues-apps.wizmeapps.com/live-widget/widget.htm?id=3621d9ef-2010-41bf-9ff5-4bd191814273&name=mouakke",
	},
	{
		name: "Find-me",
		description:
			"Find Me is a comprehensive online advertising platform designed to bring together the entire Syrian market in one place. It serves as a unified hub for commercial, service, tourism, and industrial businesses, offering users a seamless experience to explore and connect with various sectors.",
		tags: [
			{
				name: "Nextjs",
				color: "black-text-gradient",
			},
			{
				name: "Material UI",
				color: "blue-text-gradient",
			},
			// {
			// 	name: "shadCN",
			// 	color: "orange-text-gradient",
			// },
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/findme.jpg",
		source_code_link: "",
		platform: "Vercel",
		deploy_link: "https://merry-concha-82005a.netlify.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
