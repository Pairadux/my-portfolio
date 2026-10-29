<script lang="ts">
    import SectionHeader from "#lib/util/SectionHeader.svelte";

    interface Props {
        skills?: Array<{
            _id: string;
            name: string;
            iconLight: string;
            iconDark?: string;
            order: number;
        }>;
    }

    let { skills = [] }: Props = $props();

    let midpoint = $derived(Math.ceil(skills.length / 2));
    let firstRow = $derived(skills.slice(0, midpoint));
    let secondRow = $derived(skills.slice(midpoint));
</script>

<div class="relative md:block">
    <SectionHeader>
        {#snippet header()}Notable Skills{/snippet}
        {#snippet subheader()}Hover/Tap for details{/snippet}
    </SectionHeader>

    {#if skills.length > 0}
        <div class="mt-8 flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
            <div class="flex flex-wrap justify-center gap-4">
                {#each firstRow as skill}
                    <div class="tooltip h-12 w-12 md:h-14 md:w-14">
                        <img
                            src={skill.iconLight}
                            alt={skill.name}
                            class="h-full w-full object-contain dark:hidden" />
                        <img
                            src={skill.iconDark || skill.iconLight}
                            alt={skill.name}
                            class="hidden h-full w-full object-contain dark:block" />
                        <span class="tooltiptext bg-black text-white after:border-t-black after:border-r-transparent after:border-b-transparent after:border-l-transparent dark:bg-white dark:text-black dark:after:border-t-white">{skill.name}</span>
                    </div>
                {/each}
            </div>
            <div class="flex flex-wrap justify-center gap-4">
                {#each secondRow as skill}
                    <div class="tooltip h-12 w-12 md:h-14 md:w-14">
                        <img
                            src={skill.iconLight}
                            alt={skill.name}
                            class="h-full w-full object-contain dark:hidden" />
                        <img
                            src={skill.iconDark || skill.iconLight}
                            alt={skill.name}
                            class="hidden h-full w-full object-contain dark:block" />
                        <span class="tooltiptext bg-black text-white after:border-t-black after:border-r-transparent after:border-b-transparent after:border-l-transparent dark:bg-white dark:text-black dark:after:border-t-white">{skill.name}</span>
                    </div>
                {/each}
            </div>
        </div>
    {:else}
        <div class="mt-8 flex justify-center gap-4">
            <div class="h-12 w-12 animate-pulse rounded-sm bg-blue-500/20 dark:bg-blue-500/30"></div>
            <div
                class="h-12 w-12 animate-pulse rounded-sm bg-blue-500/20 dark:bg-blue-500/30"
                style="animation-delay: 100ms">
            </div>
            <div
                class="h-12 w-12 animate-pulse rounded-sm bg-blue-500/20 dark:bg-blue-500/30"
                style="animation-delay: 200ms">
            </div>
            <div
                class="h-12 w-12 animate-pulse rounded-sm bg-blue-500/20 dark:bg-blue-500/30"
                style="animation-delay: 300ms">
            </div>
            <div
                class="h-12 w-12 animate-pulse rounded-sm bg-blue-500/20 dark:bg-blue-500/30"
                style="animation-delay: 400ms">
            </div>
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
