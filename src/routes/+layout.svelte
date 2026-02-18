<script lang="ts">
    import { page } from "$app/stores";
    import { darkMode } from "$lib/libStore";
    import Header from "./components/header/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Testimonials from "./components/Testimonials.svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;

    $: isHome = $page.route.id === "/(pages)/(home)";
</script>

<div class="px-3 py-3 transition-colors md:px-6 md:py-8 {$darkMode ? 'dark' : ''}">
    <div class="{isHome ? '' : 'shadow-frame shadow-frame-strong'} box-border bg-white dark:bg-black">
        <div class="{isHome ? 'shadow-frame shadow-frame-strong' : ''} relative">
            <Header />
            <slot />
            <!-- PSUEDO-PADDING -->
            <div class="relative z-10 h-16"></div>
        </div>
        {#if isHome}
            <!-- CTA -->
            <section class="shadow-inset-tb shadow-inset-tb-strong flex w-full flex-col items-center gap-2 bg-blue-500 py-16">
                <h2 class="heading-font mb-2 text-center text-2xl text-white md:text-3xl">Need to chat?</h2>
                <p class="px-2 text-center text-lg text-white md:text-xl">
                    Head on over to my <a
                        class="italic underline"
                        href="/contact">contact</a> page.
                </p>
            </section>
        {/if}
        <div class="{isHome ? 'shadow-frame shadow-frame-strong' : ''} relative">
            {#if data.testimonials.length > 0 && isHome}
                <!-- PSUEDO-PADDING -->
                <div class="relative z-10 h-16"></div>
                <div class="container m-auto flex flex-col items-center">
                    <Testimonials testimonials={data.testimonials} />
                </div>
                <!-- PSUEDO-PADDING -->
                <div class="relative z-10 h-16"></div>
            {/if}
            <Footer socialLinks={data.socialLinks} />
        </div>
    </div>
</div>
