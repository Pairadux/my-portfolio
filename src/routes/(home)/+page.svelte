<script lang="ts">
    // import Hero from "./components/hero/Hero.svelte";
    import Hero from "./components/Hero.svelte";
    // import Greeting from "./components/Greeting.svelte";
    import SkillsContainer from "./components/SkillsContainer.svelte";
    import Projects from "./components/Projects.svelte";
    import Testimonials from "./components/Testimonials.svelte";
    import Cta from "./components/CTA.svelte";
</script>

<!-- MAIN CONTAINER -->
<div class="w-full">
    <div class="container m-auto flex flex-col items-center">
        <Hero />

        <hr class="my-16 h-px w-3/4 border-[1.5px] border-dashed border-black dark:border-white" />

        <!-- <Greeting /> -->
        <SkillsContainer />

        <hr class="my-16 h-px w-3/4 border-[1.5px] border-dashed border-black dark:border-white" />

        <Projects />
    </div>

    <Cta />

    <div class="container m-auto flex flex-col items-center">
        <Testimonials />
    </div>
</div>
