<script lang="ts">
    import SectionHeader from "#lib/util/SectionHeader.svelte";

    interface Props {
        hero?: {
            introduction: string;
            headshotImage?: string;
        } | null;
    }

    let { hero = null }: Props = $props();

    const greeting = 'Hi, I\'m <span class="text-blue-500">Austin</span>';
</script>

<section class="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <div class="w-4/5 lg:w-2/5">
        <SectionHeader>
            {#snippet header()}{@html greeting} &#128075{/snippet}

            {#snippet subheader()}
                {#if hero?.introduction}
                    {hero.introduction}
                    <span>
                        <a
                            class="text-blue-500 italic underline"
                            href="/about">about page</a
                        ></span
                    >.
                {:else}
                    <span class="text-black/60 italic dark:text-white/60"> Imagine the most fascinating introduction you've ever read. This is probably better than that. (Content loading...) </span>
                {/if}
            {/snippet}
        </SectionHeader>
    </div>

    {#if hero?.headshotImage}
        <div class="shadow-inner-sunken z-10 h-80 w-80 rounded-full">
            <img
                src={hero.headshotImage}
                class="h-80 w-80 rounded-full object-cover"
                alt="Austin Gause headshot" />
        </div>
    {:else}
        <div class="z-10 h-80 w-80 animate-pulse rounded-full border-4 border-blue-500/40 bg-blue-500/20 dark:bg-blue-500/30"></div>
    {/if}
</section>
