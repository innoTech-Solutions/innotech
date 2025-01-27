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
        <div className="flex justify-center">
            <motion.div
                className="flex px-8 py-4 bg-opacity-50 rounded-xl bg-neutral-800 flex-row items-center gap-12 fixed"
                initial={{ y: 0 }}
                animate={{ y: scrollDirection === "down" ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <Link href="#hero">
                    <Image
                        className="m-2 relative hover:opacity-50 transition"
                        alt="icon"
                        height={25}
                        width={25}
                        src="/icontransparent.png"
                    />
                </Link>
                <Briefcase
                    className="cursor-pointer transition hover:opacity-50"
                    color="white"
                    size={25}
                />

                <Button className="bg-sky-400 hover:bg-sky-700 cursor-pointer p-4 rounded-md text-md py-5">
                    <Link href="/contact-form" className="text-black">
                        Let&apos;s talk
                    </Link>
                </Button>
            </motion.div>
        </div>
    );
}
