<script lang="ts">
    import { projectCatalog } from "$lib/data/projectCatalog";
    import ProjectItem from "$lib/util/ProjectItem.svelte";
    import SectionHeader from "$lib/util/SectionHeader.svelte";
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
        {#each projectCatalog as project}
            <ProjectItem
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug} />
        {/each}
    </div>
</section>
