import WhyChooseUs from "@/components/choose-us";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Footer from '@/components/footer';
import ProjectShowcase from "@/components/ProjectShowcase";
import Team from '@/components/team';
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

            <Team/>

            <div className="h-screen">
				<Pricing />
            </div>
            <Footer/>
        </div>
    );
}
