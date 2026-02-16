<script lang="ts">
    import { darkMode } from "$lib/libStore";
    import Header from "./components/header/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<div class="bg-blue-500 p-3 transition-colors md:p-6 {$darkMode ? 'dark' : ''}">
    <div class="bg-white dark:bg-black">
        <div class="box-border min-h-screen">
            <Header />
            <slot />
        </div>
        <Footer socialLinks={data.socialLinks} />
    </div>
</div>
