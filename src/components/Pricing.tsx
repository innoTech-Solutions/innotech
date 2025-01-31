"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
	{
		title: "Basic",
		price: "PHP 5,000",
		description: "A simple website, personal use",
		features: ["Responsive", "1 - 3 pages", "Static Website"],
	},
	{
		title: "Standard",
		price: "PHP 15,000",
		description: "For businesses",
		features: ["Responsive", "5 - 10 pages", "Dynamic Website"],
	},
	{
		title: "Custom",
		price: "PHP 20,000",
		description: "For large businesses",
		features: ["Responsive", "10 - 15 pages", "Dynamic Website"],
	},
];

export default function Pricing () {
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
						{items.map((item, index) => (
							<Cards
								key={index}
								delay={index * 0.3}
								title={item.title}
								price={item.price}
								description={item.description}
								features={item.features}
							/>
						))}
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
}: {
	title: string;
	price: string;
	description: string;
	features: string[];
	delay: number;
}) {
	return (
		<motion.div
			className="w-full relative transition-all"
			initial={{ y: "50%", opacity: 0.5 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, delay: delay, ease: "linear" }}
		>
			<Card className="w-5/6 min-h-fit h-[400px] rounded-lg relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/100">
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
										{/* <Check className="w-4 h-4 mt-1 text-primary" /> */}
										<div className="w-full text-center flex flex-col">
											<p>{feature}</p>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* <Button variant="outline" className="gap-4">
						Take <MoveRight className="w-4 h-4" />
						</Button> */}
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
