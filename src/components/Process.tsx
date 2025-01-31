import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import processes from "@/data/process";

export default function Process() {
	return (
		<div className="w-full py-20 lg:py-40">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 items-center px-4 md:px-16 md:px-8">
					<div className="flex gap-4 flex-col justify-center items-center">
						<div>
							<div>The Process</div>
						</div>
						<div className="flex gap-4 flex-col ">
							<h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-center">Road to your success!</h1>
						</div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-2">
						{processes.map((process, index) => {
							return <ProcessCard key={index} process={process} index={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

function ProcessCard({
	process,
	index,
}: {
	process: { title: string; description: string; contents: string[]; icon: React.ComponentType<any> };
	index: number;
}) {
	return (
		<Card className={`md:w-[400px] md:p-4 bg-muted border-none md:w-full`}>
			<CardHeader className="flex md:flex-row items-center gap-3">
				<process.icon />
				<CardTitle className="text-2xl text-cyan-400">{process.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription className="pb-2">{process.description}</CardDescription>
				<div className="flex flex-col gap-2 pt-2 ">
					{process.contents.map((content, index) => {
						return <p key={index}>&#9670; {content}</p>;
					})}
				</div>
			</CardContent>
		</Card>
	);
}
