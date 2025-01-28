import type { ComponentType } from "svelte";
import Apple from "$lib/skills/Apple.svelte";
import Css from "$lib/skills/Css.svelte";
import Html from "$lib/skills/Html.svelte";
import Java from "$lib/skills/Java.svelte";
import Javascript from "$lib/skills/Javascript.svelte";
import Linux from "$lib/skills/Linux.svelte";
import Python from "$lib/skills/Python.svelte";
import Rust from "$lib/skills/Rust.svelte";
import C from "$lib/skills/C.svelte";
import Svelte from "$lib/skills/Svelte.svelte";
import Tailwind from "$lib/skills/Tailwind.svelte";

// TODO: update skills

export interface skill {
    icon: string;
    name: string;
    description: string;
    component: ComponentType;
}

export const skills: skill[] = [
    {
        icon: "html5.svg",
        name: "HTML5",
        description: "The backbone of all websites, HTML5 is used to structure and present content on the web. Though it looks pretty plain without CSS or JavaScript",
        component: Html,
    },
    {
        icon: "css3.svg",
        name: "CSS3",
        description: "The language used to style web pages and user interfaces written in HTML. Additionally useful for helping maintain the responsiveness of sites",
        component: Css,
    },
    {
        icon: "js.svg",
        name: "JavaScript",
        description: "A powerful programming language that runs in your web browser, making websites interactive and dynamic. It's an essential tool for creating modern, user-friendly websites.",
        component: Javascript,
    },
    {
        icon: "svelte.svg",
        name: "Svelte",
        description: "",
        component: Svelte,
    },
    {
        icon: "tailwind.svg",
        name: "TailwindCSS",
        description: "A utility-first CSS framework used to rapidly build custom user interfaces. It provides low-level utility classes to build designs directly in your markup.",
        component: Tailwind,
    },
    {
        icon: "linux.svg",
        name: "Linux",
        description: "",
        component: Linux,
    },
    {
        icon: "apple.svg",
        name: "Apple",
        description: "A range of products designed by Apple, typically used in professional settings. My personal weapon of choice for programming on the go.",
        component: Apple,
    },
    {
        icon: "java.svg",
        name: "Java",
        description: "A widely-used programming language known for its 'write once, run anywhere' capability. Java is used in enterprise-level applications, mobile app development, and more.",
        component: Java,
    },
    {
        icon: "python.svg",
        name: "Python",
        description: "A versatile and widely-used programming language known for its readability and simplicity. Used in web development, data analysis, AI, and more.",
        component: Python,
    },
    {
        icon: "c.svg",
        name: "C",
        description: "",
        component: C,
    },
];
