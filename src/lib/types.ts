import type { Picture } from "@sveltejs/enhanced-img";

export interface Home {
    introduction: string;
    headshot: Picture;
}

export interface About {
    title: string;
    html: string;
}

export interface ProjectSummary {
    slug: string;
    title: string;
    description: string;
    order: number;
    featured: boolean;
    logo: boolean;
    thumbnail: Picture;
}

export interface Project extends ProjectSummary {
    image: Picture;
    liveUrl?: string;
    githubUrl?: string;
    html: string;
}

export interface Skill {
    name: string;
    icon: string;
    iconDark?: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    svgViewBox: string;
    svgPath: string;
}

export interface Testimonial {
    name: string;
    position: string;
    company: string;
    message: string;
    image?: Picture;
}

export interface Haiku {
    title: string;
    lines: string[];
}

export interface Resume {
    summary: string;
    education: {
        institution: string;
        degree: string;
        location: string;
        startDate?: string;
        endDate: string;
        gpa?: string;
    }[];
    experience: {
        company: string;
        position: string;
        location: string;
        startDate: string;
        endDate: string;
        responsibilities?: string[];
    }[];
    skills: { category: string; items: string }[];
    activities: { activity: string; date: string }[];
    certifications: { name: string; date: string }[];
    footnotes?: string;
}
