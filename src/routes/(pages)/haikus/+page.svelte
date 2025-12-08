<script lang="ts">
    import ProseArticle from "$lib/util/ProseArticle.svelte";
    import Haiku from "./components/Haiku.svelte";
    import type { PageData } from './$types'

    export let data: PageData
</script>

<section class="mb-16 flex">
    <ProseArticle>
        <h3 class="text-center dark:text-white">Haikus</h3>

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
    </ProseArticle>
</section>
