import WhyChooseUs from "@/components/choose-us";
import HeroSection from "@/components/HeroSection";
import { Pricing } from "@/components/Pricing";
import Footer from '@/components/footer';

export default function Home() {
    return (
        <div className="z-0 ">
            <HeroSection/>

            {/* Project Showcase */}
            <div className="h-screen">
                <h1>Project showcase</h1>
            </div>
            <WhyChooseUs/>
            
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
            <Footer/>
        </div>
    );
}
