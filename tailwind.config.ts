import type { Config } from "tailwindcss";
import  { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			colors: {
				primary: "#0e1820",
				secondary: "#aaa6c3",
				tertiary: "#195568",
				"black-100": "#303e49",
				"black-200": "#091f26",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/herobg2.webp')",
			},
		},
	},
	plugins: [],
};
export default config;
