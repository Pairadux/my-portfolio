import { error } from "@sveltejs/kit";
import { getProject } from "#lib/server/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    const project = getProject(params.slug);

    if (!project) {
        error(404, `Project "${params.slug}" not found`);
    }

    return {
        project,
    };
};
