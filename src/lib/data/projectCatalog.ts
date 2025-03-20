export interface Project {
    image: string;
    title: string;
    description: string;
    slug: string;
    featured: boolean;
}

export const projectCatalog: Project[] = [
    {
        image: "portfolio-site.jpg",
        title: "Portfolio Site",
        description: "A modern, responsive portfolio showcasing my skills, projects, and experiences.",
        slug: "portfolio-site",
        featured: true
    },
    {
        image: "command-line-apps.jpg",
        title: "GoTM - Go Task Manager",
        description: "A Go-based TUI/CLI task manager with Vim-style keys, SQLite support, and robust concurrency.",
        slug: "gotm",
        featured: true
    },
    {
        image: "cross-platform-app.jpg",
        title: "Wails Flashcard App",
        description: "A Wails & Svelte flashcard app featuring Anki-style spaced repetition.",
        slug: "wails-flashcard-app",
        featured: true
    },
    {
        image: "dirty-beach.jpg",
        title: "Dirty Beach Cleans",
        description: "A beachy themed cleaning website designed to bring attention to a local, small business.",
        slug: "dirty-beach-cleans",
        featured: true
    },
    {
        image: "best-friends-dog-rescue.jpg",
        title: "Best Friends Dog Rescue",
        description: "A modern, fur-filled website to refresh and replace the client’s outdated site.",
        slug: "best-friends-dog-rescue",
        featured: true
    },
    {
        image: "example1.jpg",
        title: "TEMP FILLER 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        slug: "test",
        featured: true
    },
    {
        image: "example1.jpg",
        title: "TEMP FILLER 2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        slug: "test",
        featured: false
    },
    {
        image: "example2.jpg",
        title: "TEMP FILLER 3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        slug: "test",
        featured: false
    },
    {
        image: "example1.jpg",
        title: "TEMP FILLER 4",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        slug: "test",
        featured: false
    },
    {
        image: "example2.jpg",
        title: "TEMP FILLER 5",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        slug: "test",
        featured: false
    },
    {
        image: "example1.jpg",
        title: "TEMP FILLER 6",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        slug: "test",
        featured: false
    },
    {
        image: "example2.jpg",
        title: "TEMP FILLER 7",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        slug: "test",
        featured: false
    },
];
