<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<article class="container m-auto prose prose-base px-4 prose-slate sm:prose-lg md:prose-xl dark:prose-invert">
    {@render children()}
</article>
