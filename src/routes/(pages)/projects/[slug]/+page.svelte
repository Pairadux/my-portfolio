<script lang="ts">
    import ProseArticle from "$lib/util/ProseArticle.svelte";
    import type { PageData } from './$types';

    export let data: PageData;
    const { project } = data;
</script>

<svelte:head>
    <title>Austin Gause | {project.title}</title>
    <meta name="description" content={project.description} />
</svelte:head>

<section class="mb-16">
    <ProseArticle>
        <h1>{project.title}</h1>

        {#if project.image}
            <figure>
                <img src={project.image} alt={project.title} />
            </figure>
        {/if}

        <p class="text-lg">{project.description}</p>

        {#if project.liveUrl || project.githubUrl}
            <div class="flex gap-4 my-4">
                {#if project.liveUrl}
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Live Demo</a>
                {/if}
                {#if project.githubUrl}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">GitHub</a>
                {/if}
            </div>
        {/if}

        <hr />

        {#if project.overview}
            <h2>Overview</h2>
            <p>{project.overview}</p>
        {/if}

        {#if project.technologies && project.technologies.length > 0}
            <h2>Technologies</h2>
            <ul>
                {#each project.technologies as tech}
                    <li>{tech}</li>
                {/each}
            </ul>
        {/if}

        {#if project.features && project.features.length > 0}
            <h2>Key Features</h2>
            <ul>
                {#each project.features as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
        {/if}

        {#if project.challenges}
            <h2>Challenges</h2>
            <p>{project.challenges}</p>
        {/if}

        {#if project.solution}
            <h2>Solution</h2>
            <p>{project.solution}</p>
        {/if}

        {#if project.outcome}
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
        {/if}
    </ProseArticle>
</section>

