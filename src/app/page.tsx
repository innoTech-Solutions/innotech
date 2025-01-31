import WhyChooseUs from "@/components/choose-us";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import Process from '@/components/Process';
import { Testimonials } from "@/components/Testimonials";
import Process from "@/components/Process";
import MeetTheTeam from "@/components/MeetTheTeam";


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

			<Process />
            {/* Meet the team */}
            <MeetTheTeam/>

			<Pricing />
            <Footer/>
        </div>
    );
}
