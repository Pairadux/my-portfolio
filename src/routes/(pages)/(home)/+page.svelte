<script lang="ts">
    import Hero from "./components/Hero.svelte";
    import SkillsContainer from "./components/SkillsContainer.svelte";
    import FeaturedProjects from "./components/FeaturedProjects.svelte";
    import Testimonials from "./components/Testimonials.svelte";
</script>

<svelte:head>
    <title>Austin Gause | CS Major & UNIX Enthusiast</title>
    <meta
        name="description"
        content="A computer science major passionate about technology, programming, and language learning, with a focus on web development, command-line tools, and digital organization." />
</svelte:head>

<div class="w-full">
    <div class="container m-auto flex flex-col items-center">
        <Hero />

        <hr class="my-16 h-px w-3/4 border-[1.5px] border-dashed border-black dark:border-white" />

        <SkillsContainer />

        <hr class="my-16 h-px w-3/4 border-[1.5px] border-dashed border-black dark:border-white" />

        <FeaturedProjects />
    </div>

    <!-- CTA -->
    <section class="my-16 flex w-full flex-col items-center gap-2 bg-blue-500 py-16">
        <h2 class="heading-font mb-2 text-center text-2xl text-white md:text-3xl">Need to chat?</h2>
        <p class="px-2 text-center text-lg text-white md:text-xl">
            Head on over to my <a
                class="italic underline"
                href="/contact">contact</a> page.
        </p>
    </section>

    <div class="container m-auto flex flex-col items-center">
        <Testimonials />
    </div>
</div>
