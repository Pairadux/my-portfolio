<script lang="ts">
    import Divider from "#lib/util/Divider.svelte";
    import Hero from "./components/Hero.svelte";
    import SkillsContainer from "./components/SkillsContainer.svelte";
    import FeaturedProjects from "./components/FeaturedProjects.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
</script>

<svelte:head>
    <title>Austin Gause | Full Stack Developer & UNIX Enthusiast</title>
    <meta
        name="description"
        content="Full stack web developer with a B.S. in Computer Science, passionate about UNIX/Linux systems, systems programming, and command line tooling." />
</svelte:head>

<div class="flex w-full flex-col items-center">
    <Hero home={data.home} />

    <Divider class="w-3/4" />

    <SkillsContainer skills={data.skills} />

    <Divider class="w-3/4" />

    <FeaturedProjects projects={data.featuredProjects} />
</div>
