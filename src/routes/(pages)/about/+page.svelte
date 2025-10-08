<script lang="ts">
    import { assets } from "$app/paths";
    import ProseArticle from "$lib/util/ProseArticle.svelte";
    import type { PageData } from './$types';

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
            <hr />

            {#each aboutPage.sections as section}
                {#if section._type === 'textSection'}
                    <p>{section.content}</p>
                {:else if section._type === 'imageSection'}
                    <figure>
                        <img
                            src={section.image}
                            alt={section.alt || ''} />
                        {#if section.caption}
                            <figcaption>{section.caption}</figcaption>
                        {/if}
                    </figure>
                {/if}
            {/each}
        {:else}
            <h2>The Amazing World of Austin</h2>
            <hr />
            <p class="font-bold text-yellow-600">Note: About page content is not yet set up in Sanity. Please add content in the Sanity Studio.</p>
            <p>Visit <a href="http://localhost:3333" class="text-blue-500 underline" target="_blank">Sanity Studio</a> to add your about page content.</p>
        {/if}
    </ProseArticle>
</section>
