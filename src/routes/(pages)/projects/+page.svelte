<script lang="ts">
    import ProjectItem from "$lib/util/ProjectItem.svelte";
    import SectionHeader from "$lib/util/SectionHeader.svelte";
    import type { PageData } from './$types';

    export let data: PageData;
    $: projects = data.projects;
</script>

<svelte:head>
    <title>Austin Gause | Projects</title>
    <meta name="description" content="A comprehensive list of all my projects." />
</svelte:head>

<!-- PORTFOLIO SECTION -->
<section class="m-auto flex flex-col items-center">
    <!-- Section Header -->
    <SectionHeader>
        <svelte:fragment slot="header">Projects</svelte:fragment>
        <svelte:fragment slot="subheader">A comprehensive list of all of my projects.</svelte:fragment>
    </SectionHeader>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="mb-16 mt-8 flex flex-col gap-8 lg:grid lg:grid-cols-3">
        {#if projects.length > 0}
            {#each projects as project}
                <ProjectItem
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    slug={project.slug} />
            {/each}
        {:else}
            <div class="h-72 w-72 mx-auto bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse"></div>
            <div class="h-72 w-72 mx-auto bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 150ms"></div>
            <div class="h-72 w-72 mx-auto bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 300ms"></div>
        {/if}
    </div>
</section>
