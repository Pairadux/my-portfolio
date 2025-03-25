<script lang="ts">
    import { assets } from "$app/paths";
    import { fly } from "svelte/transition";
    import { onMount, onDestroy } from "svelte";

    const testimonials = [
        {
            img: "stock1.jpg",
            name: "Shannon Miller",
            message: "Austin once helped me debug a computer by talking to it sweetly. Turns out technology responds better to compliments than actual code. Total genius!",
            position: "Professional Caffeine Consumer",
            company: "Random Tech Stuff Inc.",
        },
        {
            img: "stock2.jpg",
            name: "Marcos Rodriguez",
            message: "I'm pretty sure Austin has a secret superpower of making complicated things look easy. Maybe he's part wizard, part software engineer, all mysterious coolness.",
            position: "Professional Meme Researcher",
            company: "Internet Shenanigans LLC",
        },
        {
            img: "stock3.jpg",
            name: "Jordan Thompson",
            message: "I've seen Austin solve problems faster than my cat runs from a cucumber. He's basically a human cheat code with better hair and less shedding.",
            position: "Professional Nonsense Enthusiast",
            company: "Totally Real Business Co.",
        },
        {
            img: "stock4.jpg",
            name: "Elena Chen",
            message: "Austin's organizational skills are so legendary, he once color-coded his sock drawer using a complex algorithm. Who does that? Absolute madlad!",
            position: "Professional Chaos Coordinator",
            company: "Whatever Works Enterprise",
        },
    ];

    let index = 0;
    let currentTestimonial = testimonials[index];
    let transitionDirection = "next";
    let interval: number;
    let intervalPaused = false;
    const AUTO_ADVANCE_DURATION = 5000;

    function resetInterval() {
        if (interval) {
            clearInterval(interval);
        }

        if (!intervalPaused) {
            interval = setInterval(nextTestimonial, AUTO_ADVANCE_DURATION);
        }
    }

    function prevTestimonial() {
        transitionDirection = "prev";
        index = index > 0 ? index - 1 : testimonials.length - 1;
        currentTestimonial = testimonials[index];
        resetInterval();
    }

    function nextTestimonial() {
        transitionDirection = "next";
        index = index < testimonials.length - 1 ? index + 1 : 0;
        currentTestimonial = testimonials[index];
        resetInterval();
    }

    function toggleInterval() {
        intervalPaused = !intervalPaused;

        if (intervalPaused) {
            clearInterval(interval);
        } else {
            resetInterval();
        }
    }

    onMount(() => {
        interval = setInterval(nextTestimonial, AUTO_ADVANCE_DURATION);
    });
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<section class="flex w-full flex-col items-center">
    <i class="fa-solid fa-quote-left mx-auto mb-3 text-5xl text-black dark:text-white" />
    <div class="relative h-96 w-4/5 overflow-hidden min-[370px]:h-72 sm:h-48 md:h-36 xl:h-28">
        {#key currentTestimonial}
            <figure
                class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform"
                in:fly={{ x: transitionDirection === "next" ? 300 : -300 }}
                out:fly={{ x: transitionDirection === "next" ? -300 : 300 }}>
                <blockquote class="flex items-center justify-center text-center text-xl/8 font-semibold dark:text-white">
                    <p>"{currentTestimonial.message}"</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center justify-center space-x-3">
                    <img
                        class="h-6 w-6 rounded-full object-cover object-center"
                        src="{assets}/images/testimonial/{currentTestimonial.img}"
                        alt="profile" />
                    <div class="flex items-center divide-x-2 divide-black dark:divide-white">
                        <div class="pr-3 font-semibold text-black dark:text-white">{currentTestimonial.name}</div>
                        <div class="pl-3 font-light text-black/75 dark:text-white/75">{currentTestimonial.position} at {currentTestimonial.company}</div>
                    </div>
                </figcaption>
            </figure>
        {/key}
    </div>
    <div class="flex items-center gap-8 pt-6 text-2xl text-black dark:text-white">
        <button on:click={prevTestimonial}><i class="fa-solid fa-backward" /></button>
        <div class="w-6 text-center">
            {#if intervalPaused}
                <button on:click={toggleInterval}><i class="fa-solid fa-play" /></button>
            {:else}
                <button on:click={toggleInterval}><i class="fa-solid fa-pause" /></button>
            {/if}
        </div>
        <button on:click={nextTestimonial}><i class="fa-solid fa-forward" /></button>
    </div>
</section>
