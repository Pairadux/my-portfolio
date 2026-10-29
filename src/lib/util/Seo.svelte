<script lang="ts">
    import { page } from "$app/state";
    import { SITE_URL } from "#lib/site.js";

    interface Props {
        title: string;
        description?: string;
        image?: string;
    }

    let { title, description, image = "/images/og.jpg" }: Props = $props();

    let url = $derived(SITE_URL + page.url.pathname);
    let imageUrl = $derived(new URL(image, SITE_URL).href);
</script>

<svelte:head>
    <title>{title}</title>
    <link
        rel="canonical"
        href={url} />
    <meta
        property="og:type"
        content="website" />
    <meta
        property="og:site_name"
        content="Austin Gause" />
    <meta
        property="og:title"
        content={title} />
    <meta
        property="og:url"
        content={url} />
    <meta
        property="og:image"
        content={imageUrl} />
    <meta
        name="twitter:card"
        content="summary_large_image" />
    {#if description}
        <meta
            name="description"
            content={description} />
        <meta
            property="og:description"
            content={description} />
    {/if}
</svelte:head>
