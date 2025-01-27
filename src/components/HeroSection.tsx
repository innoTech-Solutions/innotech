"use client";

import React from "react";
import { motion } from "motion/react";

export default function HeroSection() {
    return (
        <div className="z-0">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "-50%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-screen bg-[radial-gradient(circle,_rgba(0,107,125,1)_0%,_rgba(2,1,37,1)_43%)]"
            ></motion.div>
        </div>
    );
}
