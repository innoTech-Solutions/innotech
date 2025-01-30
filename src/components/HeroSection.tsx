"use client";

import React from "react";
import { motion } from "motion/react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function HeroSection() {
    return (
        <div className="flex h-screen justify-center items-center">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "-50%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-screen bg-[radial-gradient(circle,_rgba(0,107,125,1)_0%,_rgba(2,1,37,1)_43%)] absolute top-0 left-0 w-full"
            />
            <div className=" flex justify-center items-center flex-col">
                <div className="flex flex-col gap-8 mb-8">
                    <h1 className="text-6xl text-white relative z-10 text-center font-fjalla">
                        Building Websites.
                        <br /> Innovating{" "}
                        <span className="text-sky-400">Solutions</span>.
                    </h1>
                    <p className="text-white text-center"></p>
                </div>

                <div className="flex flex-row gap-4">
                    <InteractiveHoverButton>Works</InteractiveHoverButton>
                    <InteractiveHoverButton>Services</InteractiveHoverButton>
                </div>
            </div>
        </div>
    );
}
