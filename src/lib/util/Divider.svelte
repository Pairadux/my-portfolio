<script lang="ts">
    interface Props {
        class?: string;
    }

    let { class: className = "" }: Props = $props();
</script>

<hr class="not-prose my-12 h-px border-2 border-dashed border-blue-500 md:my-16 {className}" />
