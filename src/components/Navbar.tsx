"use client";

import { Briefcase } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-1/2 transform -translate-x-1/2 flex flex-row gap-8 items-center px-8 py-5 rounded-xl bg-neutral-800 bg-opacity-20 z-50"
            // initial={{ y: 0 }}
            // animate={{ y: scrollDirection === "down" ? "-100%" : "0%" }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Link href="#hero">
                <Image
                    className="m-2 relative"
                    alt="icon"
                    height={25}
                    width={25}
                    src="/icontransparent.png"
                />
            </Link>
            <Briefcase color="white" size={20} />

            <Button className="bg-sky-400 hover:bg-sky-700 cursor-pointer p-4 rounded-md text-md">
                <Link href="/contact-form" className="text-black">
                    Let&apos;s talk
                </Link>
            </Button>
        </div>
    );
}
