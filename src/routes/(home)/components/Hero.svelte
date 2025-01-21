<script lang="ts">
    import SectionHeader from "$lib/general/SectionHeader.svelte";
    import { assets } from "$app/paths";
</script>

<!-- INTRODUCTION SECTION -->
<section class="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
    <div class="w-4/5 lg:w-2/5">
        <SectionHeader>
            <svelte:fragment slot="header">Hi, I'm <span class="text-blue-500">Austin</span> &#128075</svelte:fragment>

            <svelte:fragment slot="subheader">
                A computer science major passionate about technology, programming, and language learning, with a focus on web development, command-line tools, and digital organization. Want to learn more? Check out my
                <span>
                    <a
                        class="italic underline text-blue-500"
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
    <!-- <MorphingBlob /> -->
</section>
