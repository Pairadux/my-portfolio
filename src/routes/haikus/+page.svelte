<script lang="ts">
    import ProseArticle from "$lib/ProseArticle.svelte";
    import Haiku from "./components/Haiku.svelte";
    // TODO: pull haikus from a list or file
</script>

<section class="mb-16 flex">
    <ProseArticle>
        <h3 class="text-center dark:text-white">Haikus</h3>

        <Haiku>
            <svelte:fragment slot="title">
                What is a haiku?
            </svelte:fragment>
            <svelte:fragment slot="haiku">
                What is a haiku?<br />
                All this "five-seven-five" stuff,<br />
                It doesn't make sense.
            </svelte:fragment>
        </Haiku>
    </ProseArticle>
</section>
