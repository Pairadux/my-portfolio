<script lang="ts">
    import { page } from "$app/state";
    import SectionHeader from "#lib/util/SectionHeader.svelte";
    import NotFound from "./components/NotFound.svelte";
</script>

<svelte:head>
    {#if page.status !== 404}
        <title>Austin Gause | Error</title>
    {/if}
</svelte:head>

{#if page.status === 404}
    <NotFound />
{:else}
    <section class="flex flex-col items-center px-8">
        <div class="w-4/5">
            <SectionHeader>
                {#snippet header()}{page.status}{/snippet}
                {#snippet subheader()}{page.error?.message ?? "Something went wrong."}{/snippet}
            </SectionHeader>
        </div>
    </section>
{/if}
