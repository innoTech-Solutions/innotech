"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import pricing from "@/data/pricing";
import { CarouselNext, CarouselPrevious, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export const Pricing = () => {
	const [isMobile, setIsMobile] = useState(false);
	const ArrowStyles = "h-10 w-10 border border-gray-500 rounded-[500px] p-2";
	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	return (
		<div className="h-full w-full flex flex-col justify-center items-center overflow-hidden">
			<div className="container mx-auto w-full">
				<div className="flex text-center justify-center items-center gap-4 flex-col relative">
					{/* <Badge variant="outline">Pricing</Badge> */}
					<motion.div
						initial={{ y: "100%", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="flex gap-2 flex-col"
					>
						<h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
							Smart Pricing for Smart Businesses
						</h2>
						<p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
							Quality Websites at Competitive Prices!
						</p>
					</motion.div>
					<motion.div className="grid text-left grid-cols-1 px-20 lg:grid-cols-3 w-full gap-1 place-items-center">
						{isMobile ? (
							<div className="flex gap-2 flex-row items-center">
								<Carousel>
									<CarouselContent>
										{pricing.map((price, index) => (
											<CarouselItem key={index} className="w-[100px]">
												<Cards
													delay={index * 0.3}
													title={price.title}
													price={price.price}
													description={price.description}
													features={price.features}
													isMobile={true}
												/>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious className={ArrowStyles} />
									<CarouselNext className={ArrowStyles} />
								</Carousel>
							</div>
						) : (
							pricing.map((price, index) => (
								<Cards
									key={index}
									delay={0}
									title={price.title}
									price={price.price}
									description={price.description}
									features={price.features}
									isMobile={false}
								/>
							))
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

function Cards({
	title,
	price,
	description,
	features,
	delay,
	isMobile,
}: {
	title: string;
	price: string;
	description: string;
	features: string[];
	delay: number;
	isMobile: boolean;
}) {
	const initials = isMobile ? { y: 0, opacity: 1 } : { y: "50%", opacity: 0.5 };
	const whileInView = isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 };
	const transition = isMobile ? { duration: 0, delay: 0, ease: "linear" } : { duration: 0.4, delay: delay, ease: "linear" };
	return (
		<motion.div
			className="md:w-full transition-all md:px-6"
			// initial={{ y: "50%", opacity: 0.5 }}
			// whileInView={{ y: 0, opacity: 1 }}
			// transition={{ duration: 0.4, delay: delay, ease: "linear" }}
			initial={initials}
			whileInView={whileInView}
			transition={transition}
		>
			<Card className="min-h-fit h-[400px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/100">
				<CardHeader className="bg-slate-900">
					<CardTitle>
						<span className="text-2xl flex flex-row gap-4 items-center font-normal">{title}</span>
					</CardTitle>
					<CardDescription>{description}</CardDescription>
					<p className="flex flex-row  items-center gap-2 text-xl">
						<span className="text-4xl">{price}</span>
					</p>
				</CardHeader>
				<CardContent className="flex flex-col gap-4 min-h-fit h-[300px] justify-between relative overflow-hidden">
					<div className="flex flex-col gap-8 justify-start mt-4">
						<div className="flex flex-col gap-4 justify-start">
							{features.map((feature, index) => (
								<div key={index} className={`${index === 0 ? "" : "border-t border-gray-700 pt-2"} border-gray-700 pt-2`}>
									<div className="w-full flex flex-row gap-4">
										<div className="w-full text-center flex flex-col">
											<p>{feature}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full">
						<Button asChild variant="outline" className="gap-4 bg-slate-900 hover:bg-cyan-400 hover:text-black w-full relative z-10">
							<Link href="/">Get Started</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
