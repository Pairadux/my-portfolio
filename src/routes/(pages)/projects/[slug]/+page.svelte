<script lang="ts">
    import Icon from "#lib/util/Icon.svelte";
    import ProseArticle from "#lib/util/ProseArticle.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    let project = $derived(data.project);
</script>

<svelte:head>
    <title>Austin Gause | {project.title}</title>
    <meta
        name="description"
        content={project.description} />
</svelte:head>

<section class="mb-16">
    <ProseArticle>
        <h1>{project.title}</h1>

        <p class="text-lg">{project.description}</p>

        {#if project.liveUrl || project.githubUrl}
            <div class="not-prose my-6 flex flex-wrap gap-4">
                {#if project.liveUrl}
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-3 py-1.5 font-semibold text-blue-600 shadow-lg ring-2 ring-blue-500 transition-colors hover:bg-blue-500 hover:text-white dark:text-blue-500 dark:hover:text-white">
                        <Icon
                            name="external-link"
                            class="h-4 w-4" />
                        Live Demo
                    </a>
                {/if}
                {#if project.githubUrl}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-3 py-1.5 font-semibold text-blue-600 shadow-lg ring-2 ring-blue-500 transition-colors hover:bg-blue-500 hover:text-white dark:text-blue-500 dark:hover:text-white">
                        <Icon
                            name="github"
                            class="h-4 w-4" />
                        GitHub
                    </a>
                {/if}
            </div>
        {/if}

        <figure>
            <enhanced:img
                class="mx-auto max-h-[32rem] w-auto"
                src={project.image}
                sizes="(min-width: 768px) 768px, 100vw"
                alt={project.title} />
        </figure>

        <hr class="my-8 h-px border-2 border-dashed border-blue-500 dark:border-blue-500" />

        {@html project.html}
    </ProseArticle>
</section>
