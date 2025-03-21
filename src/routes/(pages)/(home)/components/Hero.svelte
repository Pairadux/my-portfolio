<script lang="ts">
    import SectionHeader from "$lib/util/SectionHeader.svelte";
    import { assets } from "$app/paths";
</script>

<section class="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <div class="w-4/5 lg:w-2/5">
        <SectionHeader>
            <svelte:fragment slot="header">Hi, I'm <span class="text-blue-500">Austin</span> &#128075</svelte:fragment>

            <svelte:fragment slot="subheader">
                A computer science major with a passion for technology, programming, and language learning. Recently, my focus has shifted to working with UNIX/Linux systems and command line tools. Want to learn more? Check out my
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
        src="{assets}/images/headshot/senior_photo_headshot_blue_bg.jpg"
        class="z-10 h-80 w-80 rounded-full"
        alt="" />
</section>
