interface Project {
    image: string;
    title: string;
    description: string;
    techUsed: string[];
}

const projects: Project[] = [
    {
        image: '',
        title: 'Real Estate',
        description: 'A comprehensive real estate platform.',
        techUsed: ['React', 'Supabase', 'TypeScript']
    },
    {
        image: '',
        title: 'Clothing Store',
        description: 'An online store for clothing and accessories.',
        techUsed: ['React', 'Supabase', 'TypeScript']
    }
];

export default projects;