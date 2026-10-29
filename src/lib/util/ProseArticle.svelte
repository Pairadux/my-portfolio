<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<article class="container prose prose-base prose-slate dark:prose-invert m-auto px-4 sm:prose-lg md:prose-xl">
    {@render children()}
</article>
