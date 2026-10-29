<script lang="ts">
    import ProseArticle from "#lib/util/ProseArticle.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    let about = $derived(data.about);
</script>

<svelte:head>
    <title>Austin Gause | About</title>
    <meta
        name="description"
        content={about.title} />
</svelte:head>

<section class="mb-16">
    <ProseArticle>
        <h2>{about.title}</h2>

        {@html about.html}

        <p>
            Feel free to <a
                href="/contact"
                class="text-blue-500 italic underline">reach out</a>
            if you'd like to collaborate, chat about tech, or
            <a
                href="https://www.youtube.com/watch?v=jabH3wRwiWQ"
                class="text-blue-500 italic underline"
                target="_blank">discuss the political and economic state of the world right now.</a>
        </p>
    </ProseArticle>
</section>
