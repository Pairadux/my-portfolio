<script lang="ts">
    export let socialLinks: Array<{
        _id: string;
        platform: string;
        url: string;
        svgViewBox: string;
        svgPath: string;
        order: number;
    }> = [];

    const currentYear = new Date().getFullYear();
</script>

<!-- FOOTER -->
<footer class="shadow-inner-strong mt-16 box-content bg-white pb-32 pt-8 shadow-inner dark:bg-black">
    <div class="flex flex-col items-center justify-center gap-2">
        {#if socialLinks.length > 0}
            <ul class="flex flex-row gap-4 p-2">
                {#each socialLinks as item}
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
        {:else}
            <div class="flex flex-row gap-4 p-2 animate-pulse">
                <div class="h-12 w-12 bg-gray-300 dark:bg-gray-700 ring-2 ring-blue-500"></div>
                <div class="h-12 w-12 bg-gray-300 dark:bg-gray-700 ring-2 ring-blue-500"></div>
                <div class="h-12 w-12 bg-gray-300 dark:bg-gray-700 ring-2 ring-blue-500"></div>
            </div>
        {/if}

        <h4 class="text-black dark:text-white">Made with <strike class="decoration-red-500 decoration-4">love</strike> crayons &#169; 2024 - {currentYear}</h4>
        <p class="text-black dark:text-white">.- -.-. --.&nbsp;&nbsp;.-.. --- ...- . ...&nbsp;&nbsp;-.- .-. -...</p>
    </div>
</footer>
