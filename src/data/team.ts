interface TeamMember {
	name: string;
	role: string;
	department: string;
	joined: string;
	image: string;
}

const team: TeamMember[] = [
	{
		name: "Julian Macato",
		role: "Software Engineer",
		department: "Operations",
		joined: "Jan 30, 2023",
		image: "/team/julian.png",
	},
	{
		name: "Jameson Gelarman",
		role: "Software Engineer",
		department: "Operations",
		joined: "Feb 15, 2023",
		image: "/team/jameson.png",
	},
	{
		name: "Vicente Lepardo",
		role: "Software Engineer",
		department: "Operations",
		joined: "March 10, 2023",
		image: "/team/vicente.jpg",
	},


];

export default team;
