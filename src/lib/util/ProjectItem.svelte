<script lang="ts">
    export let title: string;
    export let description: string;
    export let image: string;
    export let slug: string;
</script>

<a
    href="/projects/{slug}"
    class="no-underline">
    <div class="group relative h-72 w-72 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:transform">
        <div class="absolute left-2 top-2 h-[95%] w-[95%] outline-dashed outline-[4px] outline-offset-2 outline-blue-500 transition-all group-hover:left-4 group-hover:top-4"></div>

        <!-- PORTFOLIO ITEMS -->
        <div class="shadow-frame relative flex h-72 w-72 justify-center border-[1.5px] border-blue-500 bg-white">
            <!-- PORTFOLIO HOVER ITEMS -->
            <div class="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 bg-blue-500 px-4 opacity-0 transition-opacity group-hover:opacity-100">
                <h2 class="heading-font text-center text-2xl text-white transition md:text-3xl">
                    {title}
                </h2>
                <p class="text-center text-lg text-white md:text-xl">
                    {description}
                </p>
            </div>

            <!-- PORTFOLIO IMAGE -->
            {#if image}
                {#if title == "Muxly" || title == "Lapse" || title == "Gigafont"}
                    <img
                        class="w-full bg-blue-500 object-contain brightness-100 transition-opacity group-hover:opacity-0"
                        src={image}
                        alt={title} />
                {:else}
                    <img
                        class="w-full object-cover brightness-50 transition-opacity group-hover:opacity-0"
                        src={image}
                        alt={title} />
                {/if}
            {:else}
                <div class="flex h-full w-full animate-pulse items-center justify-center bg-blue-500/30 dark:bg-blue-500/40">
                    <span class="text-sm font-light text-white/80">Loading...</span>
                </div>
            {/if}

            {#if title != "Muxly" && title != "Lapse" && title != "Gigafont"}
                <!-- PORTFOLIO TITLE -->
                <h2 class="heading-font absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-1 text-center text-2xl text-white transition-opacity group-hover:invisible group-hover:opacity-0 md:text-3xl">
                    {title}
                </h2>
            {/if}
        </div>
    </div>
</a>
