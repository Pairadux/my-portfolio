<script lang="ts">
    import SectionHeader from "#lib/util/SectionHeader.svelte";
    import type { Home } from "#lib/types.js";

    interface Props {
        home: Home;
    }

    let { home }: Props = $props();

    const greeting = 'Hi, I\'m <span class="text-blue-500">Austin</span>';
</script>

<section class="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <div class="w-4/5 lg:w-2/5">
        <SectionHeader>
            {#snippet header()}{@html greeting} &#128075{/snippet}

            {#snippet subheader()}
                {home.introduction}
                <span>
                    <a
                        class="text-blue-600 italic underline dark:text-blue-500"
                        href="/about">about page</a
                    ></span
                >.
            {/snippet}
        </SectionHeader>
    </div>

    <div class="shadow-inner-sunken z-10 h-80 w-80 rounded-full">
        <enhanced:img
            src={home.headshot}
            sizes="320px"
            class="h-80 w-80 rounded-full object-cover"
            alt="Austin Gause headshot" />
    </div>
</section>
