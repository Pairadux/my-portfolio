import { Marked } from "marked";
import { parse } from "yaml";
import type { Picture } from "@sveltejs/enhanced-img";
import type { About, Haiku, Home, Project, ProjectSummary, Resume, Skill, SocialLink, Testimonial } from "#lib/types.js";

const ROOT = "/src/content/";
const PROSE_SIZES = "(min-width: 768px) 768px, 100vw";

const files = import.meta.glob<string>("/src/content/**/*.{md,yaml}", { query: "?raw", import: "default", eager: true });
const pictures = import.meta.glob<Picture>("/src/content/**/*.{jpg,jpeg,png,webp,avif}", {
    query: { enhanced: true, w: "320;640;960;1280;1600" },
    import: "default",
    eager: true,
});
const svgs = import.meta.glob<string>("/src/content/**/*.svg", { query: "?no-inline", import: "default", eager: true });

function read(file: string): string {
    const source = files[ROOT + file];
    if (source === undefined) throw new Error(`Missing content file: src/content/${file}`);
    return source;
}

/**
 * Resolves a path written inside a content file. Paths are relative to the
 * directory of the file they appear in.
 */
function resolve(from: string, path: string): string {
    const dir = from.slice(0, from.lastIndexOf("/") + 1);
    return ROOT + dir + path.replace(/^\.\//, "");
}

function picture(from: string, path: string): Picture {
    const found = pictures[resolve(from, path)];
    if (!found) throw new Error(`Missing image "${path}" referenced in src/content/${from}`);
    return found;
}

function svg(from: string, path: string): string {
    const found = svgs[resolve(from, path)];
    if (!found) throw new Error(`Missing SVG "${path}" referenced in src/content/${from}`);
    return found;
}

function yaml<T>(file: string): T {
    return parse(read(file)) as T;
}

function frontmatter<T>(file: string): { data: T; body: string } {
    const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(read(file));
    if (!match) throw new Error(`Missing frontmatter in src/content/${file}`);
    return { data: parse(match[1]) as T, body: match[2] };
}

function escape(text: string): string {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function pictureHtml(image: Picture, alt: string): string {
    const sources = Object.entries(image.sources)
        .map(([format, srcset]) => `<source srcset="${srcset}" sizes="${PROSE_SIZES}" type="image/${format}" />`)
        .join("");
    return `<picture>${sources}<img src="${image.img.src}" alt="${escape(alt)}" width="${image.img.w}" height="${image.img.h}" loading="lazy" decoding="async" /></picture>`;
}

/**
 * Renders Markdown to HTML. Standalone images become figures, using the
 * image title as the caption.
 */
function markdown(file: string, source: string): string {
    const marked = new Marked({
        renderer: {
            paragraph({ tokens }) {
                if (tokens.length === 1 && tokens[0].type === "image") return this.parser.parseInline(tokens);
                return false;
            },
            image({ href, title, text }) {
                const caption = title ? `<figcaption>${escape(title)}</figcaption>` : "";
                return `<figure>${pictureHtml(picture(file, href), text)}${caption}</figure>`;
            },
        },
    });
    return marked.parse(source, { async: false });
}

export function getHome(): Home {
    const data = yaml<{ introduction: string; headshot: string }>("home.yaml");
    return { introduction: data.introduction, headshot: picture("home.yaml", data.headshot) };
}

export function getAbout(): About {
    const { data, body } = frontmatter<{ title: string }>("about.md");
    return { title: data.title, html: markdown("about.md", body) };
}

export function getResume(): Resume {
    return yaml<Resume>("resume.yaml");
}

export function getSkills(): Skill[] {
    return yaml<Skill[]>("skills.yaml").map((skill) => ({
        name: skill.name,
        icon: svg("skills.yaml", skill.icon),
        iconDark: skill.iconDark && svg("skills.yaml", skill.iconDark),
    }));
}

export function getSocialLinks(): SocialLink[] {
    return yaml<SocialLink[]>("social.yaml");
}

export function getTestimonials(): Testimonial[] {
    return yaml<(Omit<Testimonial, "image"> & { image?: string })[]>("testimonials.yaml").map((testimonial) => ({
        ...testimonial,
        image: testimonial.image ? picture("testimonials.yaml", testimonial.image) : undefined,
    }));
}

export function getHaikus(): Haiku[] {
    return yaml<Haiku[]>("haikus.yaml");
}

interface ProjectFrontmatter {
    title: string;
    description: string;
    order: number;
    featured?: boolean;
    logo?: boolean;
    thumbnail: string;
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
}

const projectSlugs = Object.keys(files)
    .map((key) => /^\/src\/content\/projects\/([^/]+)\/index\.md$/.exec(key)?.[1])
    .filter((slug): slug is string => slug !== undefined);

function readProject(slug: string) {
    const file = `projects/${slug}/index.md`;
    const { data, body } = frontmatter<ProjectFrontmatter>(file);
    const summary: ProjectSummary = {
        slug,
        title: data.title,
        description: data.description,
        order: data.order,
        featured: data.featured ?? false,
        logo: data.logo ?? false,
        thumbnail: picture(file, data.thumbnail),
    };
    return { file, data, body, summary };
}

export function getProjects(): ProjectSummary[] {
    return projectSlugs.map((slug) => readProject(slug).summary).sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): ProjectSummary[] {
    return getProjects().filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
    if (!projectSlugs.includes(slug)) return undefined;
    const { file, data, body, summary } = readProject(slug);
    return {
        ...summary,
        image: data.image ? picture(file, data.image) : summary.thumbnail,
        liveUrl: data.liveUrl,
        githubUrl: data.githubUrl,
        html: markdown(file, body),
    };
}
