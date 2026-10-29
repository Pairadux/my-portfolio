<script lang="ts">
    import ProjectItem from "#lib/util/ProjectItem.svelte";
    import SectionHeader from "#lib/util/SectionHeader.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    let projects = $derived(data.projects);
</script>

<svelte:head>
    <title>Austin Gause | Projects</title>
    <meta
        name="description"
        content="A comprehensive list of all my projects." />
</svelte:head>

<!-- PORTFOLIO SECTION -->
<section class="m-auto flex flex-col items-center">
    <!-- Section Header -->
    <SectionHeader>
        {#snippet header()}Projects{/snippet}
        {#snippet subheader()}A comprehensive list of all of my projects.{/snippet}
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
            <div class="mx-auto h-72 w-72 animate-pulse rounded bg-blue-500/20 dark:bg-blue-500/30"></div>
            <div
                class="mx-auto h-72 w-72 animate-pulse rounded bg-blue-500/20 dark:bg-blue-500/30"
                style="animation-delay: 150ms">
            </div>
            <div
                class="mx-auto h-72 w-72 animate-pulse rounded bg-blue-500/20 dark:bg-blue-500/30"
                style="animation-delay: 300ms">
            </div>
        {/if}
    </div>
</section>
