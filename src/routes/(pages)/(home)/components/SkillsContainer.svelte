<script lang="ts">
    import SectionHeader from "$lib/util/SectionHeader.svelte";

    export let skills: Array<{
        _id: string;
        name: string;
        iconLight: string;
        iconDark?: string;
        order: number;
    }> = [];
</script>

<div class="relative md:block">
    <SectionHeader>
        <svelte:fragment slot="header">Notable Skills</svelte:fragment>
        <svelte:fragment slot="subheader">Hover/Tap for details</svelte:fragment>
    </SectionHeader>

    <div class="mt-8 grid grid-cols-5 gap-4 lg:flex">
        {#if skills.length > 0}
            {#each skills as skill}
                <div class="tooltip h-12 w-12 md:h-14 md:w-14">
                    <!-- Light mode icon -->
                    <img
                        src={skill.iconLight}
                        alt={skill.name}
                        class="h-full w-full object-contain dark:hidden"
                    />
                    <!-- Dark mode icon (or fallback to light icon) -->
                    <img
                        src={skill.iconDark || skill.iconLight}
                        alt={skill.name}
                        class="hidden h-full w-full object-contain dark:block"
                    />
                    <span class="tooltiptext bg-black text-white after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black dark:bg-white dark:text-black dark:after:border-t-white">{skill.name}</span>
                </div>
            {/each}
        {:else}
            <p class="col-span-5 text-center text-gray-500">No skills added yet. Add some in Sanity Studio!</p>
        {/if}
    </div>
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
    }
</style>
