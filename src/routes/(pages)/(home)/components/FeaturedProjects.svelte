<script lang="ts">
    import ProjectItem from "#lib/util/ProjectItem.svelte";
    import SectionHeader from "#lib/util/SectionHeader.svelte";
    import type { ProjectSummary } from "#lib/types.js";

    interface Props {
        projects: ProjectSummary[];
    }

    let { projects }: Props = $props();
</script>

<!-- PORTFOLIO SECTION -->
<section class="flex w-full flex-col items-center px-8">
    <!-- TITLE -->
    <div class="w-4/5">
        <SectionHeader>
            {#snippet header()}Recent Projects{/snippet}
            {#snippet subheader()}
                A few of my most recent projects. Want to see more? Check out my
                <span
                    ><a
                        class="text-blue-500 italic underline"
                        href="/projects">projects</a
                    ></span> page.
            {/snippet}
        </SectionHeader>
    </div>

    <!-- PORTFOLIO ITEMS CONTAINER -->
    <div class="mt-8 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project}
            <ProjectItem {project} />
        {/each}
    </div>
</section>
