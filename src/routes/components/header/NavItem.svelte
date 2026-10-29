<script lang="ts">
    import { page } from "$app/state";

    interface Props {
        href: string;
        label: string;
        classes: string;
    }

    let { href, label, classes }: Props = $props();

    let isActive = $derived(href === "/" ? page.url.pathname === href : page.url.pathname.startsWith(href));
</script>

<a
    class="font-normal decoration-2 hover:underline dark:text-white {classes} {isActive ? 'underline' : ''}"
    {href}>{label}</a>
