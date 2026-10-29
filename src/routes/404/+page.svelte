<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import SectionHeader from "#lib/util/SectionHeader.svelte";

    const quips = ["It's probably still downloading from the cloud... the very slow, very dramatic cloud.", "Whatever was here was really impressive, I promise. Like, award-winning impressive. (Disclaimer: Awards may be self-awarded)", "Imagine the most fascinating page you've ever read. This was probably better than that.", "In the meantime, know that I'm definitely qualified for things."];

    let quip = $state<string>();

    onMount(() => {
        quip = quips[Math.floor(Math.random() * quips.length)];
    });
</script>

<svelte:head>
    <title>Austin Gause | Page Not Found</title>
</svelte:head>

<section class="flex flex-col items-center px-8">
    <div class="w-4/5">
        <SectionHeader>
            {#snippet header()}404{/snippet}
            {#snippet subheader()}This page doesn't exist. Maybe it's still loading.{/snippet}
        </SectionHeader>
    </div>
    <p class="mt-8 text-center text-lg text-black italic md:text-xl dark:text-white">
        Content loads slowly<br />
        Patience is a virtue now<br />
        Worth the wait, I swear
    </p>
    <p class="mt-8 text-center text-lg text-black md:text-xl dark:text-white">
        Head back <a
            class="text-blue-500 italic underline"
            href="/">home</a
        >.
    </p>
    {#if quip}
        <p
            class="mt-8 max-w-prose text-center text-black/60 dark:text-white/60"
            in:fade>
            {quip}
        </p>
    {/if}
</section>
