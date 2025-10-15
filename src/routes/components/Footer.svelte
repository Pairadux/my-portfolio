<script lang="ts">
    import { socialMedias } from "$lib/data/sociallinks";

    export let socialLinks: Array<{
        _id: string;
        platform: string;
        url: string;
        svgViewBox: string;
        svgPath: string;
        order: number;
    }> = [];

    const currentYear = new Date().getFullYear();

    // Use Sanity social links if available, otherwise fall back to just GitHub
    $: displaySocialLinks = socialLinks.length > 0 ? socialLinks : [{
        _id: 'fallback-github',
        platform: 'GitHub',
        url: socialMedias.github.link,
        svgViewBox: socialMedias.github.viewbox,
        svgPath: socialMedias.github.path,
        order: 0
    }];
</script>

<!-- FOOTER -->
<footer class="shadow-inner-strong mt-16 box-content bg-white pb-32 pt-8 shadow-inner dark:bg-black">
    <div class="flex flex-col items-center justify-center gap-2">
        <ul class="flex flex-row gap-4 p-2">
            {#each displaySocialLinks as item}
                <li class="group flex h-12 w-12 items-center justify-center ring-2 ring-blue-500 hover:bg-blue-500">
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
        <p class="text-black dark:text-white">.- -.-. --.&nbsp;&nbsp;.-.. --- ...- . ...&nbsp;&nbsp;-.- .-. -...</p>
    </div>
</footer>
