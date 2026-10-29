<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        header: Snippet;
        subheader: Snippet;
    }

    let { header, subheader }: Props = $props();
</script>

<h2 class="heading-font mb-2 text-center text-2xl text-black md:text-3xl dark:text-white">
    {@render header()}
</h2>
<p class="px-2 text-center text-lg text-black md:text-xl dark:text-white">
    {@render subheader()}
</p>
