// the texts are placements
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { processes } from "@/data/process";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Process() {
	return (
		<div className="w-full py-20 lg:py-40">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 items-center px-16 md:px-8 md:grid-cols-3">
					<div className="flex gap-4 flex-col">
						<div>
							<div>The Process</div>
						</div>
						<div className="flex gap-4 flex-col">
							<h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">This is the start of something!</h1>
							{/* <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
								Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade
								methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
							</p> */}
						</div>
					</div>
					<div className="grid grid-cols-2 col-span-2 gap-8">
						{/* <div className="bg-muted aspect-square"></div>
						<div className="bg-muted row-span-2"></div>
						<div className="bg-muted aspect-square"></div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

function ProcessCard({ process }: { process: { title: string; description: string; icon: string } }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{process.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{process.description}</CardDescription>
			</CardContent>
		</Card>
	);
}
