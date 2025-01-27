import HeroSection from "@/components/HeroSection";

export default function Home() {
    return (
        <div className="z-40">
            {/* Hero section */}
            <div className="h-screen">
                <HeroSection/>
            </div>

            {/* Project Showcase */}
            <div className="h-screen">
                <h1>Project showcase</h1>
            </div>

            {/* Why choose us */}
            <div className="h-screen">
                <h1>Why choose us</h1>
            </div>

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
                <h1>PRICING</h1>
            </div>

            {/* Footer */}
            <div className="h-[25vh] bg-[#010116]">
                <h1>FOOTER</h1>
            </div>
        </div>
    );
}
