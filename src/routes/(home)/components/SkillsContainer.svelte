<script lang="ts">
    import SectionHeader from "$lib/SectionHeader.svelte";
    import type { ComponentType } from "svelte";
    import Apple from "$lib/skills/Apple.svelte";
    import Html from "$lib/skills/Html.svelte";
    import Java from "$lib/skills/Java.svelte";
    import Javascript from "$lib/skills/Javascript.svelte";
    import Linux from "$lib/skills/Linux.svelte";
    import Python from "$lib/skills/Python.svelte";
    import C from "$lib/skills/C.svelte";
    import Svelte from "$lib/skills/Svelte.svelte";
    import Tailwind from "$lib/skills/Tailwind.svelte";
    import Go from "$lib/skills/Go.svelte";

    interface skill {
        name: string;
        component: ComponentType;
    }

    const skills: skill[] = [
        { name: "HTML5", component: Html, },
        { name: "JavaScript", component: Javascript, },
        { name: "Svelte", component: Svelte, },
        { name: "TailwindCSS", component: Tailwind, },
        { name: "Linux", component: Linux, },
        { name: "Apple", component: Apple, },
        { name: "Java", component: Java, },
        { name: "Python", component: Python, },
        { name: "C", component: C, },
        { name: "Go", component: Go, },
    ];
</script>

<div class="relative md:block">
    <SectionHeader>
        <svelte:fragment slot="header">Notable Skills</svelte:fragment>
        <svelte:fragment slot="subheader">Hover/Tap for details</svelte:fragment>
    </SectionHeader>

    <div class="mt-8 grid grid-cols-5 gap-4 lg:flex">
        {#each skills as skill}
            <div class="tooltip h-12 w-12 md:h-14 md:w-14">
                <svelte:component this={skill.component} />
                <span class="tooltiptext bg-black text-white after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black dark:after:border-t-white dark:bg-white dark:text-black">{skill.name}</span>
            </div>
        {/each}
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
