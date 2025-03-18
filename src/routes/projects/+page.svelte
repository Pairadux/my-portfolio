<script lang="ts">
    import { projects } from "$lib/data/projects";
    import ProjectItem from "$lib/general/ProjectItem.svelte";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<svelte:head>
    <title>Austin Gause | Projects</title>
    <meta name="description" content="A comprehensive list of all my projects." />
</svelte:head>

<!-- PORTFOLIO SECTION -->
<section class="m-auto flex flex-col items-center">
    <!-- TITLE -->
    <SectionHeader>
        <svelte:fragment slot="header">Projects</svelte:fragment>
        <svelte:fragment slot="subheader">A comprehensive list of all of my projects.</svelte:fragment>
    </SectionHeader>

    <p class="text-sm dark:text-white">* = unfinished projects</p>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="mb-16 mt-8 flex flex-col gap-8 lg:grid lg:grid-cols-3">
        {#each projects as project}
            <ProjectItem
                title={project.title}
                description={project.description}
                image={project.image}
                href={project.href} />
        {/each}
    </div>
</section>
