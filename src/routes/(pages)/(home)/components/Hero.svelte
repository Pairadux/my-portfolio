<script lang="ts">
    import SectionHeader from "$lib/util/SectionHeader.svelte";

    export let hero: {
        introduction: string;
        headshotImage?: string;
    } | null = null;

    const greeting = "Hi, I'm <span class=\"text-blue-500\">Austin</span>";
</script>

<section class="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <div class="w-4/5 lg:w-2/5">
        <SectionHeader>
            <svelte:fragment slot="header">{@html greeting} &#128075</svelte:fragment>

            <svelte:fragment slot="subheader">
                {#if hero?.introduction}
                    {hero.introduction}
                    <span>
                        <a
                            class="italic text-blue-500 underline"
                            href="/about">about page</a
                        ></span
                    >.
                {:else}
                    <div class="animate-pulse">
                        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                    </div>
                {/if}
            </svelte:fragment>
        </SectionHeader>
    </div>

    {#if hero?.headshotImage}
        <img
            src={hero.headshotImage}
            class="z-10 h-80 w-80 rounded-full object-cover"
            alt="Austin Gause headshot" />
    {:else}
        <div class="z-10 h-80 w-80 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
    {/if}
</section>
