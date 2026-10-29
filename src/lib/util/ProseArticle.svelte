<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<article class="container prose prose-base prose-slate m-auto px-4 sm:prose-lg md:prose-xl dark:prose-invert">
    {@render children()}
</article>
