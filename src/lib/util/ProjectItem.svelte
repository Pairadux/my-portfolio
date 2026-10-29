<script lang="ts">
    import type { ProjectSummary } from "#lib/types.js";

    interface Props {
        project: ProjectSummary;
    }

    let { project }: Props = $props();
</script>

<a
    href="/projects/{project.slug}"
    class="group block no-underline focus-visible:outline-none">
    <div class="relative h-72 w-72 transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-focus-visible:-translate-x-1 group-focus-visible:-translate-y-1">
        <div class="absolute top-2 left-2 h-[95%] w-[95%] outline-4 outline-offset-2 outline-blue-500 transition-[top,left] duration-300 ease-out outline-dashed group-hover:top-4 group-hover:left-4 group-focus-visible:top-4 group-focus-visible:left-4"></div>

        <!-- PORTFOLIO ITEMS -->
        <div class="shadow-frame relative flex h-72 w-72 border-[1.5px] border-blue-500 bg-white dark:bg-black [&>picture]:contents">
            <!-- PORTFOLIO IMAGE -->
            <enhanced:img
                class="h-full w-full object-cover"
                src={project.thumbnail}
                sizes="512px"
                alt={project.title} />

            <!-- PORTFOLIO HOVER ITEMS -->
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-blue-500 px-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                <h2 class="heading-font text-center text-2xl text-white md:text-3xl">
                    {project.title}
                </h2>
                <p class="text-center text-lg text-white md:text-xl">
                    {project.description}
                </p>
            </div>
        </div>
    </div>

    <!-- PORTFOLIO TITLE -->
    <h2 class="heading-font mt-5 text-center text-xl text-black dark:text-white">
        {project.title}
    </h2>
</a>
