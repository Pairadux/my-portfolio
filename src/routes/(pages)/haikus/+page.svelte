<script lang="ts">
    import ProseArticle from "$lib/util/ProseArticle.svelte";
    import Haiku from "./components/Haiku.svelte";
    import type { PageData } from './$types'

    export let data: PageData
</script>

<section class="mb-16 flex">
    <ProseArticle>
        <h3 class="text-center dark:text-white">Haikus</h3>

        {#if data.haikus.length > 0}
            {#each data.haikus as haiku (haiku._id)}
                <Haiku>
                    <svelte:fragment slot="title">
                        {haiku.title}
                    </svelte:fragment>
                    <svelte:fragment slot="haiku">
                        {haiku.line1}<br />
                        {haiku.line2}<br />
                        {haiku.line3}
                    </svelte:fragment>
                </Haiku>
            {/each}
        {:else}
            <div class="italic text-black/60 dark:text-white/60">
                <p class="font-bold dark:text-white/60">Loading Haiku</p>
                <p>
                    Content loads slowly<br />
                    Patience is a virtue now<br />
                    Worth the wait, I swear
                </p>
            </div>
            <hr />
            <div class="space-y-4 mt-6">
                <div class="h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse"></div>
                <div class="h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 150ms"></div>
            </div>
        {/if}
    </ProseArticle>
</section>
