<script lang="ts">
    import Divider from "#lib/util/Divider.svelte";
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
<Divider />
