<script lang="ts">
    import Seo from "#lib/util/Seo.svelte";
    import ProseArticle from "#lib/util/ProseArticle.svelte";
    import Haiku from "./components/Haiku.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
</script>

<Seo title="Austin Gause | Haikus" />

<section class="flex">
    <ProseArticle>
        <h3 class="text-center dark:text-white">Haikus</h3>

        {#each data.haikus as haiku}
            <Haiku>
                {#snippet title()}{haiku.title}{/snippet}
                {#snippet lines()}
                    {#each haiku.lines as line, i}
                        {line}{#if i < haiku.lines.length - 1}<br />{/if}
                    {/each}
                {/snippet}
            </Haiku>
        {/each}
    </ProseArticle>
</section>
