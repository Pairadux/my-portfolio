import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { SvelteComponent } from 'svelte';

const modules = import.meta.glob<{
    default: typeof SvelteComponent;
}>("$lib/projects/*.svelte");

export const load: PageLoad = async ({ params }) => {
    const { slug } = params;

    const path = `/src/lib/projects/${slug}.svelte`;

    const importer = modules[path];
    if (!importer) {
        throw error(404, `Project "${slug}" not found`);
    }

    const componentModule = await importer();
    const component = componentModule.default;

    return {
        component,
    };
};
