import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { SvelteComponent } from 'svelte';
import type { Project } from '$lib/data/projectCatalog';
import { projectCatalog } from '$lib/data/projectCatalog';

const modules = import.meta.glob<{ default: typeof SvelteComponent; }>("$lib/projects/*.svelte");

export const load: PageLoad<{ component: typeof SvelteComponent; project: Project }> = async ({ params }) => {
    const { slug } = params;
    const path = `/src/lib/projects/${slug}.svelte`;

    const importer = modules[path];
    if (!importer) {
        throw error(404, `Project "${slug}" not found`);
    }

    const project = projectCatalog.find(project => project.slug === slug);
    if (!project) {
        throw error(404, `Project metadata for "${slug}" not found`)
    }

    const componentModule = await importer();
    const component = componentModule.default;

    return {
        component,
        project,
    };
};
