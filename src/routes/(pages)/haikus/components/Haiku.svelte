<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        title: Snippet;
        lines: Snippet;
    }

    let { title, lines }: Props = $props();
</script>

<p class="font-bold dark:text-white">
    {@render title()}
</p>
<p class="">
    {@render lines()}
</p>
<hr class="my-16 h-px border-[2px] border-dashed border-blue-500 dark:border-blue-500" />
