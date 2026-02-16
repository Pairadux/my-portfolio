<script lang="ts">
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

    let index = 0;
    $: currentTestimonial = testimonials[index];
    let transitionDirection = "next";
    let interval: number;
    let intervalPaused = false;
    const AUTO_ADVANCE_DURATION = 5000;

    let testimonialHeights: number[] = [];
    $: maxHeight = testimonialHeights.length > 0 ? Math.max(...testimonialHeights) : 0;

    function resetInterval() {
        if (interval) {
            clearInterval(interval);
        }

        if (!intervalPaused && testimonials.length > 0) {
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
        if (testimonials.length > 0) {
            interval = setInterval(nextTestimonial, AUTO_ADVANCE_DURATION);
        }
    });
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<section class="relative flex w-full flex-col items-center">
    <i class="fa-solid fa-quote-left mx-auto mb-3 text-5xl text-black dark:text-white" />
    <!-- Renders all testimonials invisibly to measure the tallest one -->
    {#if testimonials.length > 0}
        <div class="invisible absolute -z-10 w-4/5 pointer-events-none" aria-hidden="true">
            {#each testimonials as testimonial, i}
                <div bind:clientHeight={testimonialHeights[i]}>
                    <blockquote class="flex items-center justify-center text-center text-xl/8 font-semibold">
                        <p>"{testimonial.message}"</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center justify-center space-x-3">
                        {#if testimonial.image}
                            <img class="h-6 w-6 rounded-full object-cover object-center" src={testimonial.image} alt="" />
                        {/if}
                        <div class="flex items-center divide-x-2">
                            <div class="pr-3 font-semibold">{testimonial.name}</div>
                            <div class="pl-3 font-light">{testimonial.position} at {testimonial.company}</div>
                        </div>
                    </figcaption>
                </div>
            {/each}
        </div>
    {/if}
    <div
        class="relative w-4/5 overflow-hidden {testimonials.length === 0 ? 'h-48' : ''}"
        style:height={maxHeight > 0 ? `${maxHeight}px` : null}>
        {#if testimonials.length > 0}
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
        {:else}
            <div class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform">
                <blockquote class="flex items-center justify-center text-center text-xl/8 font-semibold italic text-black/60 dark:text-white/60">
                    <p>"People usually say nice things here. Trust me, they're very nice things."</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center justify-center">
                    <div class="text-black/50 dark:text-white/50 text-sm">(Loading testimonials...)</div>
                </figcaption>
            </div>
        {/if}
    </div>
    <div class="flex items-center gap-8 pt-6 text-2xl text-black dark:text-white">
        <button on:click={prevTestimonial} disabled={testimonials.length === 0}><i class="fa-solid fa-backward" /></button>
        <div class="w-6 text-center">
            {#if intervalPaused}
                <button on:click={toggleInterval} disabled={testimonials.length === 0}><i class="fa-solid fa-play" /></button>
            {:else}
                <button on:click={toggleInterval} disabled={testimonials.length === 0}><i class="fa-solid fa-pause" /></button>
            {/if}
        </div>
        <button on:click={nextTestimonial} disabled={testimonials.length === 0}><i class="fa-solid fa-forward" /></button>
    </div>
</section>
