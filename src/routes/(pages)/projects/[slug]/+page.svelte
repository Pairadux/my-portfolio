<script lang="ts">
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

        <figure>
            <enhanced:img
                src={project.image}
                sizes="(min-width: 768px) 768px, 100vw"
                alt={project.title} />
        </figure>

        <p class="text-lg">{project.description}</p>

        {#if project.liveUrl || project.githubUrl}
            <div class="my-4 flex gap-4">
                {#if project.liveUrl}
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-500 underline">Live Demo</a>
                {/if}
                {#if project.githubUrl}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-500 underline">GitHub</a>
                {/if}
            </div>
        {/if}

        <hr class="my-8 h-px border-2 border-dashed border-blue-500 dark:border-blue-500" />

        {@html project.html}
    </ProseArticle>
</section>
