<script lang="ts">
    import { projectCatalog } from "$lib/data/projectCatalog";
    import ProjectItem from "$lib/util/ProjectItem.svelte";
    import SectionHeader from "$lib/util/SectionHeader.svelte";
</script>

<!-- PORTFOLIO SECTION -->
<section class="flex w-full flex-col items-center">
    <!-- TITLE -->
    <div class="w-4/5">
        <SectionHeader>
            <svelte:fragment slot="header">Recent Projects</svelte:fragment>
            <svelte:fragment slot="subheader">
                A few of my most recent projects. Want to see more? Check out my
                <span
                    ><a
                        class="italic text-blue-500 underline"
                        href="/projects">projects</a
                    ></span> page.
            </svelte:fragment>
        </SectionHeader>
    </div>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="mt-8 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {#each projectCatalog as project}
            {#if project.featured}
                <ProjectItem
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    slug={project.slug} />
            {/if}
        {/each}
    </div>
</section>
