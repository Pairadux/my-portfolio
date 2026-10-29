<script lang="ts">
    import { fly } from "svelte/transition";
    import Icon from "#lib/util/Icon.svelte";
    import type { Testimonial } from "#lib/types.js";

    interface Props {
        testimonials: Testimonial[];
    }

    let { testimonials }: Props = $props();

    const AUTO_ADVANCE_DURATION = 5000;

    let index = $state(0);
    let direction = $state(1);
    let paused = $state(false);

    function show(next: number, dir: number) {
        direction = dir;
        index = (next + testimonials.length) % testimonials.length;
    }

    // Restarts the timer whenever the current testimonial changes
    $effect(() => {
        const current = index;
        if (paused || testimonials.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const timer = setInterval(() => show(current + 1, 1), AUTO_ADVANCE_DURATION);
        return () => clearInterval(timer);
    });
</script>

{#snippet quote(testimonial: Testimonial)}
    <figure>
        <blockquote class="flex items-center justify-center text-center text-xl/8 font-semibold text-black dark:text-white">
            <p>"{testimonial.message}"</p>
        </blockquote>
        <figcaption class="mt-6 flex items-center justify-center space-x-3">
            {#if testimonial.image}
                <enhanced:img
                    class="h-6 w-6 rounded-full object-cover object-center"
                    src={testimonial.image}
                    sizes="24px"
                    alt={testimonial.name} />
            {/if}
            <div class="flex items-center divide-x-2 divide-black dark:divide-white">
                <div class="pr-3 font-semibold text-black dark:text-white">{testimonial.name}</div>
                <div class="pl-3 font-light text-black/75 dark:text-white/75">{testimonial.position} at {testimonial.company}</div>
            </div>
        </figcaption>
    </figure>
{/snippet}

<section
    class="relative flex w-full flex-col items-center"
    aria-label="Testimonials"
    onmouseenter={() => (paused = true)}
    onmouseleave={() => (paused = false)}
    onfocusin={() => (paused = true)}
    onfocusout={() => (paused = false)}>
    <Icon
        name="quote-left"
        class="mx-auto mb-3 h-12 text-black dark:text-white" />
    <!-- Every testimonial shares one grid cell, so the box is always as tall as the longest -->
    <div class="grid w-4/5 overflow-hidden">
        {#each testimonials as testimonial}
            <div
                class="invisible col-start-1 row-start-1 self-center"
                aria-hidden="true">
                {@render quote(testimonial)}
            </div>
        {/each}
        {#key index}
            <div
                class="col-start-1 row-start-1 self-center"
                in:fly={{ x: 300 * direction }}
                out:fly={{ x: -300 * direction }}>
                {@render quote(testimonials[index])}
            </div>
        {/key}
    </div>
    {#if testimonials.length > 1}
        <div class="flex items-center gap-6 pt-6 text-black dark:text-white">
            <button
                type="button"
                aria-label="Previous testimonial"
                onclick={() => show(index - 1, -1)}>
                <Icon
                    name="chevron-left"
                    class="h-5" />
            </button>
            <div class="flex gap-2">
                {#each testimonials as testimonial, i}
                    <button
                        type="button"
                        class="h-2.5 w-2.5 rounded-full {i === index ? 'bg-blue-500' : 'bg-black/25 dark:bg-white/25'}"
                        aria-label="Show testimonial from {testimonial.name}"
                        aria-current={i === index}
                        onclick={() => show(i, i < index ? -1 : 1)}></button>
                {/each}
            </div>
            <button
                type="button"
                aria-label="Next testimonial"
                onclick={() => show(index + 1, 1)}>
                <Icon
                    name="chevron-right"
                    class="h-5" />
            </button>
        </div>
    {/if}
</section>
