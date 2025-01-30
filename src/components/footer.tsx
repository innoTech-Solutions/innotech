"use client";

import { useResponsive } from '@/hooks/useResponsive';
import { Separator } from '@/components/ui/separator';

export default function Footer() {

    const isMobileTablet = useResponsive();

    return !isMobileTablet ? (
        <footer className="bg-[#010115] text-white py-10">
            <div className="container mx-auto px-6">

                <div className="flex justify-between items-start gap-8">
                    <div className="flex flex-col space-y-3">
                        <img src="/innotech_transparent.png" className="w-14 h-14"/>
                        <div className="md:w-1/2 space-y-4">
                            <h1 className="font-bold font-fjalla text-3xl leading-tight">
                                We leverage your digital presence with our skill!
                            </h1>
                            <p className="text-gray-400">Innotech, 2025</p>
                        </div>
                    </div>

                    <div className="w-1/2 text-left">
                        <h2 className="text-xl font-bold mb-3">Company</h2>
                        <ul className="flex items-center space-x-10">
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                                    Project Showcase
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                                    Meet the Team
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© 2025 Innotech. All rights reserved.</p>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Tiktok</a>
                    </div>
                </div>
            </div>
        </footer>
    ) : (
        <footer className="bg-[#010115] text-white py-10">
            <div className="container mx-auto px-6">

                <div className="flex  justify-between items-start gap-8">
                    <div className="flex flex-col space-y-3">
                        <img src="/innotech_transparent.png" className="w-14 h-14"/>
                        <div className="md:w-1/2 space-y-4">
                            <h1 className="font-bold font-fjalla text-3xl leading-tight">
                                We leverage your digital presence with our skill!
                            </h1>
                            <p className="text-gray-400">Innotech, 2025</p>
                        </div>
                    </div>

                    <div className="w-1/2 text-left">
                        <h2 className="text-xl font-bold mb-3">Company</h2>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                                    Project Showcase
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                                    Meet the Team
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© 2025 Innotech. All rights reserved.</p>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Tiktok</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
