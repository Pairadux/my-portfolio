<script lang="ts">
    import Hero from "./components/Hero.svelte";
    import SkillsContainer from "./components/SkillsContainer.svelte";
    import FeaturedProjects from "./components/FeaturedProjects.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Austin Gause | CS Major & UNIX Enthusiast</title>
    <meta
        name="description"
        content="A computer science major passionate about technology, programming, and language learning, with a focus on web development, command-line tools, and digital organization." />
</svelte:head>

<div class="flex w-full flex-col items-center">
    <Hero hero={data.hero} />

    <hr class="my-16 h-px w-3/4 border-[2px] border-dashed border-blue-500 dark:border-blue-500" />

    <SkillsContainer skills={data.skills} />

    <hr class="my-16 h-px w-3/4 border-[2px] border-dashed border-blue-500 dark:border-blue-500" />

    <FeaturedProjects projects={data.featuredProjects} />
</div>
