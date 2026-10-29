import { getProjects } from "#lib/server/content.js";
import { SITE_URL } from "#lib/site.js";

export const prerender = true;

const PAGES = ["/", "/resume", "/projects", "/about", "/contact"];

export function GET() {
    const paths = [...PAGES, ...getProjects().map((project) => `/projects/${project.slug}`)];
    const urls = paths.map((path) => `    <url><loc>${SITE_URL}${path}</loc></url>`).join("\n");

    return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
        headers: { "Content-Type": "application/xml" },
    });
}
