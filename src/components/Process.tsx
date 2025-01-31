import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

import processes from "@/data/process";
import { Button } from "./ui/button";

export default function Process() {
	return (
		<div className=" w-full">
			<div className="container mx-auto px-6">
				<div className=" grid md:grid-cols-5 grid-rows-1 gap-4 relative">
					<div className="text-center md:col-span-3 sm:text-left flex flex-col gap-6 justify-between justify-self-end max-w-lg">
						<span className="text-xl sm:text-3xl">Process</span>
						<h1 className="text-4xl sm:text-6xl text-cyan-400">How We Deliver Our Services</h1>
						<p className=" text-justify text-base">
							From planning to launch, we craft high-quality, responsive websites tailored to your needs. Our process ensures a smooth,
							efficient experience, delivering a professional online presence for your brand.
						</p>
					</div>
					<div className="w-full">
						<div className="w-full grid grid-cols-2 md:grid-cols-1 gap-5">
							{processes.map((process, index) => {
								return <ProcessCard key={index} process={process} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ProcessCard({ process }: { process: { title: string; description: string; contents: string[]; icon: React.ComponentType<any> } }) {
	return (
		<HoverCard>
			<HoverCardTrigger className="flex flex-row gap-4 relative text-2xl">
				{/* asChild */}
				<Button variant="link" className="md:w-fit hover:underline-none !no-underline text-primary text-xl !underline-offset-0 flex gap-2">
					<process.icon style={{ width: "24px", height: "24px" }} />
					<h2
						className="relative 
				before:absolute before:content-[''] before:bottom-0 before:bg-cyan-400 before:w-0 before:h-1 before:transition-all before:duration-300 hover:before:w-full"
					>
						{process.title}
					</h2>
				</Button>
			</HoverCardTrigger>
			<HoverCardContent side="bottom" className="md:w-[400px]">
				<div className="flex justify-between">
					<div className="">
						<h4 className="text-base font-semibold p-2 text-left">{process.description}</h4>
						<hr />
						<p className="text-sm text-left">
							{process.contents.map((content, index) => {
								return (
									<p key={index} className="p-1">
										&#9670; {content}
									</p>
								);
							})}
						</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}

// export default function Process() {
// 	return (
// 		<div className="w-full py-20 lg:py-40">
// 			<div className="container mx-auto">
// 				<div className="grid grid-cols-1 gap-8 items-center px-4 md:px-16 md:px-8">
// 					<div className="flex gap-4 flex-col justify-center items-center">
// 						<div>
// 							<div>Process</div>
// 						</div>
// 						<div className="flex gap-4 flex-col ">
// 							<h1 className="text-5xl md:text-6xl max-w-lg tracking-tighter text-center uppercase">How We Deliver Our Services</h1>
// 						</div>
// 					</div>
// 					<div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-2">
// 						{processes.map((process, index) => {
// 							return <ProcessCard key={index} process={process} />;
// 						})}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// function ProcessCard({ process }: { process: { title: string; description: string; contents: string[]; icon: React.ComponentType<any> } }) {
// 	return (
// 		<Card className={`md:w-[400px] md:p-4 bg-muted border-none md:w-full`}>
// 			<CardHeader className="flex md:flex-row items-center gap-3">
// 				<process.icon />
// 				<CardTitle className="text-2xl text-cyan-400">{process.title}</CardTitle>
// 			</CardHeader>
// 			<CardContent>
// 				<CardDescription className="pb-2">{process.description}</CardDescription>
// 				<div className="flex flex-col gap-2 pt-2 ">
// 					{process.contents.map((content, index) => {
// 						return <p key={index}>&#9670; {content}</p>;
// 					})}
// 				</div>
// 			</CardContent>
// 		</Card>
// 	);
// }
