interface PricingItem {
	title: string;
	price: string;
	description: string;
	features: string[];
}

const pricing = [
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

export default pricing;
