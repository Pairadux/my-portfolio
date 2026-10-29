<script lang="ts">
    import type { ProjectSummary } from "#lib/types.js";

    interface Props {
        project: ProjectSummary;
    }

    let { project }: Props = $props();
</script>

<a
    href="/projects/{project.slug}"
    class="no-underline">
    <div class="group relative h-72 w-72 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:transform">
        <div class="absolute top-2 left-2 h-[95%] w-[95%] outline-4 outline-offset-2 outline-blue-500 transition-all outline-dashed group-hover:top-4 group-hover:left-4"></div>

        <!-- PORTFOLIO ITEMS -->
        <div class="shadow-frame relative flex h-72 w-72 justify-center border-[1.5px] border-blue-500 bg-white [&>picture]:contents">
            <!-- PORTFOLIO HOVER ITEMS -->
            <div class="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 bg-blue-500 px-4 opacity-0 transition-opacity group-hover:opacity-100">
                <h2 class="heading-font text-center text-2xl text-white transition md:text-3xl">
                    {project.title}
                </h2>
                <p class="text-center text-lg text-white md:text-xl">
                    {project.description}
                </p>
            </div>

            <!-- PORTFOLIO IMAGE -->
            {#if project.logo}
                <enhanced:img
                    class="w-full bg-blue-500 object-contain brightness-100 transition-opacity group-hover:opacity-0"
                    src={project.thumbnail}
                    sizes="512px"
                    alt={project.title} />
            {:else}
                <enhanced:img
                    class="w-full object-cover brightness-50 transition-opacity group-hover:opacity-0"
                    src={project.thumbnail}
                    sizes="512px"
                    alt={project.title} />

                <!-- PORTFOLIO TITLE -->
                <h2 class="heading-font absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-1 text-center text-2xl text-white transition-opacity group-hover:invisible group-hover:opacity-0 md:text-3xl">
                    {project.title}
                </h2>
            {/if}
        </div>
    </div>
</a>
