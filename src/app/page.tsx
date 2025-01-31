import WhyChooseUs from "@/components/choose-us";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Footer from '@/components/footer';
import ProjectShowcase from "@/components/ProjectShowcase";
import Process from '@/components/Process';
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
    return (
        <div>
            <HeroSection/>

            <ProjectShowcase/>

            <WhyChooseUs/>
            
            {/* TODO: (add if may testimonials na) */}
            {/* <div className="max-w-7xl h-screen mx-auto">
                <Testimonials/>
            </div> */}

			<Process />


            {/* Meet the team */}
            <div className="h-screen">
                <h1>Meet the team</h1>
            </div>

			<Pricing />
            <Footer/>
        </div>
    );
}
