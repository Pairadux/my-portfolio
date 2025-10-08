import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getProjectBySlug } from '$lib/sanity/client';

export const load: PageLoad = async ({ params }) => {
    const { slug } = params;

    const project = await getProjectBySlug(slug);

    if (!project) {
        throw error(404, `Project "${slug}" not found`);
    }

    return {
        project,
    };
};
