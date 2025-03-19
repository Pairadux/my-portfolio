<script lang="ts">
    // import Hero from "./components/hero/Hero.svelte";
    import Hero from "./components/Hero.svelte";
    // import Greeting from "./components/Greeting.svelte";
    import SkillsContainer from "./components/SkillsContainer.svelte";
    import FeaturedProjects from "./components/FeaturedProjects.svelte";
    import Testimonials from "./components/Testimonials.svelte";
    import Cta from "./components/CTA.svelte";
</script>

<svelte:head>
    <title>Austin Gause | CS Major & UNIX Enthusiast</title>
    <meta name="description" content="A computer science major passionate about technology, programming, and language learning, with a focus on web development, command-line tools, and digital organization." />
</svelte:head>

<!-- MAIN CONTAINER -->
<div class="w-full">
    <div class="container m-auto flex flex-col items-center">
        <Hero />

        <hr class="my-16 h-px w-3/4 border-[1.5px] border-dashed border-black dark:border-white" />

        <SkillsContainer />

        <hr class="my-16 h-px w-3/4 border-[1.5px] border-dashed border-black dark:border-white" />

        <FeaturedProjects />
    </div>

    <Cta />

    <div class="container m-auto flex flex-col items-center">
        <Testimonials />
    </div>
</div>
