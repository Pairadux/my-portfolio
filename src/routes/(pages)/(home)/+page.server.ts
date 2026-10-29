import { getFeaturedProjects, getHome, getSkills } from "#lib/server/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    return {
        home: getHome(),
        featuredProjects: getFeaturedProjects(),
        skills: getSkills(),
    };
};
