<script lang="ts">
    import SectionHeader from "$lib/util/SectionHeader.svelte";

    export let skills: Array<{
        _id: string;
        name: string;
        iconLight: string;
        iconDark?: string;
        order: number;
    }> = [];

    $: midpoint = Math.ceil(skills.length / 2);
    $: firstRow = skills.slice(0, midpoint);
    $: secondRow = skills.slice(midpoint);
</script>

<div class="relative md:block">
    <SectionHeader>
        <svelte:fragment slot="header">Notable Skills</svelte:fragment>
        <svelte:fragment slot="subheader">Hover/Tap for details</svelte:fragment>
    </SectionHeader>

    {#if skills.length > 0}
        <div class="mt-8 flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
            <div class="flex flex-wrap justify-center gap-4">
                {#each firstRow as skill}
                    <div class="tooltip h-12 w-12 md:h-14 md:w-14">
                        <img src={skill.iconLight} alt={skill.name} class="h-full w-full object-contain dark:hidden" />
                        <img src={skill.iconDark || skill.iconLight} alt={skill.name} class="hidden h-full w-full object-contain dark:block" />
                        <span class="tooltiptext bg-black text-white after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black dark:bg-white dark:text-black dark:after:border-t-white">{skill.name}</span>
                    </div>
                {/each}
            </div>
            <div class="flex flex-wrap justify-center gap-4">
                {#each secondRow as skill}
                    <div class="tooltip h-12 w-12 md:h-14 md:w-14">
                        <img src={skill.iconLight} alt={skill.name} class="h-full w-full object-contain dark:hidden" />
                        <img src={skill.iconDark || skill.iconLight} alt={skill.name} class="hidden h-full w-full object-contain dark:block" />
                        <span class="tooltiptext bg-black text-white after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black dark:bg-white dark:text-black dark:after:border-t-white">{skill.name}</span>
                    </div>
                {/each}
            </div>
        </div>
    {:else}
        <div class="mt-8 flex justify-center gap-4">
            <div class="h-12 w-12 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse"></div>
            <div class="h-12 w-12 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 100ms"></div>
            <div class="h-12 w-12 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 200ms"></div>
            <div class="h-12 w-12 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 300ms"></div>
            <div class="h-12 w-12 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 400ms"></div>
        </div>
    {/if}
</div>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        bottom: 115%;
        left: 50%;
        margin-left: -60px;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        color: #f1f5f9;
        background-color: #3b82f6;
        filter: drop-shadow(0 4px 6px rgb(0 0 0 / 0.15));
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }

    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #3b82f6 transparent transparent transparent;
    }
</style>
