// the texts are placements
import { Button } from "@/components/ui/button";

export default function Process() {
	return (
		<div className="w-full py-20 lg:py-40">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
					<div className="flex gap-4 flex-col">
						<div>
							<div>We&apos;re live!</div>
						</div>
						<div className="flex gap-4 flex-col">
							<h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">This is the start of something!</h1>
							<p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
								Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade
								methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8">
						<div className="bg-muted rounded-md aspect-square"></div>
						<div className="bg-muted rounded-md row-span-2"></div>
						<div className="bg-muted rounded-md aspect-square"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
