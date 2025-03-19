<script lang="ts">
    import { projects } from "$lib/data/projects";
    import ProjectItem from "$lib/general/ProjectItem.svelte";
    import SectionHeader from "$lib/general/SectionHeader.svelte";
</script>

<!-- PORTFOLIO SECTION -->
<section class="flex w-full flex-col items-center">
    <!-- TITLE -->
    <div class="w-4/5">
        <SectionHeader>
            <svelte:fragment slot="header">Recent Projects</svelte:fragment>
            <svelte:fragment slot="subheader">
                A few of my most recent projects. Want to see more? Head over to my
                <span
                    ><a
                        class="underline italic text-blue-500"
                        href="/projects">projects page</a
                    ></span
                >.
            </svelte:fragment>
        </SectionHeader>
    </div>

    <p class="text-sm dark:text-white">* = unfinished projects</p>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="mt-8 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project}
            {#if project.featured}
                <ProjectItem
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    href={project.href} />
            {/if}
        {/each}
    </div>
</section>
