<script lang="ts">
    import type { SocialMediaInfo } from "$lib/data/sociallinks";

    export let item: SocialMediaInfo;
</script>

<li class="group flex h-12 w-12 items-center justify-center ring-2 ring-blue-500 hover:bg-blue-500">
    <a target="_blank" href={item.link}>
        <svg
            class="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={item.viewbox}>
            <path
                class="fill-blue-500 group-hover:fill-white"
                d={item.path} />
        </svg>
    </a>
</li>
