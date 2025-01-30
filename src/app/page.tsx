import WhyChooseUs from "@/components/choose-us";
import HeroSection from "@/components/HeroSection";
import { Pricing } from "@/components/Pricing";
import Process from "@/components/Process";

export default function Home() {
	return (
		<div className="z-0 bg-[#020125]">
			{/* Hero section */}
			<HeroSection />

			{/* Project Showcase */}
			<div className="h-screen">
				<h1>Project showcase</h1>
			</div>

			<WhyChooseUs />

			{/* Services */}
			<Process />

			{/* Testimonials */}
			<div className="h-screen">
				<h1>Testimonials</h1>
			</div>

			{/* Meet the team */}
			<div className="h-screen">
				<h1>Meet the team</h1>
			</div>

			{/* Pricing */}
			<div className="h-screen">
				<Pricing />
			</div>

			{/* Footer */}
			<div className="h-[25vh] bg-[#010116]">
				<h1>FOOTER</h1>
			</div>
		</div>
	);
}
