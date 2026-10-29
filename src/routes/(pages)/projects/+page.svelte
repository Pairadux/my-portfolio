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
    <div class="mt-8 mb-16 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project}
            <ProjectItem {project} />
        {/each}
    </div>
</section>
