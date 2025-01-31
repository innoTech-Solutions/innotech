import WhyChooseUs from "@/components/choose-us";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import { Testimonials } from "@/components/Testimonials";
import Process from "@/components/Process";

export default function Home() {
	return (
		<div>
			<HeroSection />

			<ProjectShowcase />

			<WhyChooseUs />

			{/* TODO: (add if may testimonials na) */}
			{/* <div className="max-w-7xl h-screen mx-auto">
                <Testimonials/>
            </div> */}

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

			<div className="h-screen">
				<Pricing />
			</div>
			<Footer />
		</div>
	);
}
