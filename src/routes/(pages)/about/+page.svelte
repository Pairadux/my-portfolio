<script lang="ts">
    import ProseArticle from "$lib/util/ProseArticle.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { aboutPage } = data;

    // Check if we have Sanity content or need to show fallback
    $: hasContent = aboutPage && aboutPage.sections && aboutPage.sections.length > 0;
</script>

<svelte:head>
    <title>Austin Gause | About</title>
    <meta
        name="description"
        content={aboutPage?.pageTitle || "The Amazing World of Austin"} />
</svelte:head>

<section class="mb-16">
    <ProseArticle>
        {#if hasContent}
            <h2>{aboutPage.pageTitle}</h2>

            {#each aboutPage.sections as section}
                {#if section._type === "headingSection"}
                    {#if section.level === "h2"}
                        <h2>{section.text}</h2>
                    {:else if section.level === "h4"}
                        <h4>{section.text}</h4>
                    {:else}
                        <h3>{section.text}</h3>
                    {/if}
                {:else if section._type === "textSection"}
                    <p>{section.content}</p>
                {:else if section._type === "imageSection"}
                    <figure>
                        <img
                            src={section.image}
                            alt={section.alt || ""} />
                        {#if section.caption}
                            <figcaption>{section.caption}</figcaption>
                        {/if}
                    </figure>
                {/if}
            {/each}

            <p>
                Feel free to <a
                    href="/contact"
                    class="italic text-blue-500 underline">reach out</a>
                if you'd like to collaborate, chat about tech, or
                <a
                    href="https://www.youtube.com/watch?v=jabH3wRwiWQ"
                    class="italic text-blue-500 underline"
                    target="_blank">discuss the political and economic state of the world right now.</a>
            </p>
        {:else}
            <h2>About</h2>
            <hr />
            <p class="italic text-black/60 dark:text-white/60">
                Content currently loading... Probably something fascinating about technology, programming, and maybe a hobby or two.
            </p>
            <div class="mt-8 space-y-4">
                <div class="h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse"></div>
                <div class="h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 150ms"></div>
                <div class="h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded animate-pulse" style="animation-delay: 300ms"></div>
            </div>
        {/if}
    </ProseArticle>
</section>
