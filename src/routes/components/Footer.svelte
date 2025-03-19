<script lang="ts">
    import { socialMedias } from "$lib/data/sociallinks";
</script>

<!-- FOOTER -->
<footer class="shadow-inner-strong mt-16 box-content bg-white pb-32 pt-8 shadow-inner dark:bg-black">
    <div class="flex flex-col items-center justify-center gap-2">
        <ul class="flex flex-row gap-4 p-2">
            {#each Object.values(socialMedias) as item}
                <li class="group flex h-12 w-12 items-center justify-center ring-2 ring-blue-500 hover:bg-blue-500">
                    <a
                        target="_blank"
                        href={item.link}>
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
            {/each}
        </ul>

        <h4 class="text-black dark:text-white">Made with <strike class="decoration-red-500 decoration-4">love</strike> crayons &#169; 2024</h4>
    </div>
</footer>
