"use client";

import { cn } from "@/lib/utils";
import { logos } from "../data/logos";
import projects from "../data/projects";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectShowcase() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <div className="flex flex-col max-w-7xl px-4 mx-auto my-12">
            <h1 className="text-5xl font-fjalla">
                Selected <em className="text-cyan-400">Works</em>
            </h1>

            <div className="flex flex-wrap items-center my-4 gap-4">
                {projects.map((project, index) => (
                    <Link
                        href={project.link}
                        key={index}
                        className="w-full md:w-1/2"
                    >
                        <div
                            className={cn(
                                "group cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
                                "transition-all duration-500"
                            )}
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                            }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {hoveredProject === index &&
                            project.hoverImage.endsWith(".mp4") ? (
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={project.hoverImage}
                                    autoPlay
                                    loop
                                    muted
                                />
                            ) : (
                                hoveredProject === index && (
                                    <div
                                        className="absolute inset-0 w-full h-full bg-cover"
                                        style={{
                                            backgroundImage: `url(${project.hoverImage})`,
                                        }}
                                    ></div>
                                )
                            )}
                            <div className="px-8 py-2 text relative z-50 backdrop-blur-lg backdrop-saturate-150 border rounded-lg border-black/5">
                                <div className="flex flex-row justify-between items-center">
                                    <h1 className="font-semibold font-fjalla text-sm md:text-base text-cyan-400 relative">
                                        {project.name}
                                    </h1>
                                    <div className="flex space-x-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Image
                                                key={tagIndex}
                                                src={
                                                    logos[
                                                        tag as keyof typeof logos
                                                    ]
                                                }
                                                alt={`${tag} Logo`}
                                                width={20}
                                                height={20}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
