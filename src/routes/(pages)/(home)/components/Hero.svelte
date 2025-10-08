<script lang="ts">
    import SectionHeader from "$lib/util/SectionHeader.svelte";
    import { assets } from "$app/paths";

    export let hero: {
        introduction: string;
        headshotImage?: string;
    } | null = null;

    // Greeting is hardcoded to preserve styling
    const greeting = "Hi, I'm <span class=\"text-blue-500\">Austin</span>";

    // Fallback introduction text if not set in Sanity
    $: introduction = hero?.introduction || "A computer science major with a passion for technology, programming, and language learning. Recently, my focus has shifted to working with UNIX/Linux systems and command line tools. Want to learn more? Check out my";
    $: imageUrl = hero?.headshotImage || `${assets}/images/headshot/senior_photo_headshot_blue_bg.jpg`;
</script>

<section class="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <div class="w-4/5 lg:w-2/5">
        <SectionHeader>
            <svelte:fragment slot="header">{@html greeting} &#128075</svelte:fragment>

            <svelte:fragment slot="subheader">
                {introduction}
                <span>
                    <a
                        class="italic text-blue-500 underline"
                        href="/about">about page</a
                    ></span
                >.
            </svelte:fragment>
        </SectionHeader>
    </div>

    <img
        src={imageUrl}
        class="z-10 h-80 w-80 rounded-full object-cover"
        alt="Austin Gause headshot" />
</section>
