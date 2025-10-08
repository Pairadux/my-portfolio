<script lang="ts">
    import { assets } from "$app/paths";
    import { fly } from "svelte/transition";
    import { onMount, onDestroy } from "svelte";

    export let testimonials: Array<{
        _id: string;
        name: string;
        position: string;
        company: string;
        message: string;
        image?: string;
        order: number;
    }> = [];

    // Fallback testimonials if none exist in Sanity yet
    const fallbackTestimonials = [
        {
            _id: 'fallback-1',
            name: "Shannon Miller",
            message: "Austin once helped me debug a computer by talking to it sweetly. Turns out technology responds better to compliments than actual code. Total genius!",
            position: "Professional Caffeine Consumer",
            company: "Random Tech Stuff Inc.",
            image: `${assets}/images/testimonial/stock1.jpg`,
            order: 0
        }
    ];

    $: displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

    let index = 0;
    $: currentTestimonial = displayTestimonials[index];
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
        index = index > 0 ? index - 1 : displayTestimonials.length - 1;
        currentTestimonial = displayTestimonials[index];
        resetInterval();
    }

    function nextTestimonial() {
        transitionDirection = "next";
        index = index < displayTestimonials.length - 1 ? index + 1 : 0;
        currentTestimonial = displayTestimonials[index];
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
                    {#if currentTestimonial.image}
                        <img
                            class="h-6 w-6 rounded-full object-cover object-center"
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name} />
                    {/if}
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
