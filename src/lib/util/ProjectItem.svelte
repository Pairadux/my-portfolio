<script lang="ts">
    import { assets } from "$app/paths";
    export let title: string;
    export let description: string;
    export let image: string;
    export let slug: string;

    // Check if image is a full URL (from Sanity) or a local filename
    $: imageUrl = image?.startsWith('http') ? image : `${assets}/images/portfolio/${image}`;
</script>

<a href="/projects/{slug}" class="no-underline">
    <div class="relative h-72 w-72 group transition-transform hover:transform hover:-translate-x-1 hover:-translate-y-1">

        <div class="absolute group-hover:left-4 group-hover:top-4 transition-all left-2 top-2 h-[95%] w-[95%] outline-dashed outline-offset-2 outline-blue-500"></div>

        <!-- PORTFOLIO ITEMS -->
        <div class="relative flex h-72 w-72 justify-center border-[1.5px] border-black dark:border-white bg-white shadow-md">

            <!-- PORTFOLIO HOVER ITEMS -->
            <div class="absolute left-1/2 top-1/2 flex h-full w-full bg-blue-500 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 class="text-center text-2xl heading-font text-white transition md:text-3xl">
                    {title}
                </h2>
                <p class="text-center text-lg text-white md:text-xl">
                    {description}
                </p>
            </div>

            <!-- PORTFOLIO IMAGE -->
            <img
                class="object-cover w-full brightness-50 transition-opacity group-hover:opacity-0"
                src={imageUrl}
                alt={title} />

            <!-- PORTFOLIO TITLE -->
            <h2 class="absolute left-1/2 top-1/2 w-full heading-font group-hover:invisible group-hover:opacity-0 transition-opacity -translate-x-1/2 -translate-y-1/2 px-1 text-center text-2xl text-white md:text-3xl">
                {title}
            </h2>

        </div>
    </div>
</a>
