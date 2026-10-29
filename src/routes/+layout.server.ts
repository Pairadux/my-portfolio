import { getSocialLinks, getTestimonials } from "#lib/server/content.js";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = () => {
    return {
        socialLinks: getSocialLinks(),
        testimonials: getTestimonials(),
    };
};
