<script lang="ts">
    import { page } from "$app/stores";
    export let href: string;
    export let label: string;
    export let classes: string;

    $: isActive = href === "/" ? $page.url.pathname === href : $page.url.pathname.startsWith(href);
</script>

<li>
    <a
        class="text-xl font-normal decoration-2 hover:underline dark:text-white {classes} {isActive ? 'underline' : ''}"
        {href}>{label}</a>
</li>
