<script lang="ts">
    import type { SocialLink } from "#lib/types.js";

    interface Props {
        socialLinks: SocialLink[];
    }

    let { socialLinks }: Props = $props();

    const currentYear = new Date().getFullYear();
</script>

<!-- FOOTER -->
<footer class="shadow-inner-t-strong shadow-inner-t box-content bg-white pt-8 pb-12 dark:bg-black">
    <div class="flex flex-col items-center justify-center gap-2">
        <ul class="flex flex-row gap-4 p-2">
            {#each socialLinks as item}
                <li class="group flex h-12 w-12 items-center justify-center shadow-lg ring-2 ring-blue-500 hover:bg-blue-500">
                    <a
                        target="_blank"
                        href={item.url}
                        aria-label={item.platform}>
                        <svg
                            class="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox={item.svgViewBox}>
                            <path
                                class="fill-blue-500 group-hover:fill-white"
                                d={item.svgPath} />
                        </svg>
                    </a>
                </li>
            {/each}
        </ul>

        <h4 class="text-black dark:text-white">Made with <strike class="decoration-red-500 decoration-4">love</strike> crayons &#169; 2024 - {currentYear}</h4>
        <p class="text-black dark:text-white">.- -.-. --. / .-.. --- ...- . ... / -.- .-. -...</p>
    </div>
</footer>
