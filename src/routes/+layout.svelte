<script lang="ts">
    import { darkMode } from "$lib/libStore";
    import DevelopmentPopup from "./components/DevelopmentPopup.svelte";
    import Header from "./components/header/Header.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<div class="bg-blue-500 p-3 transition-colors md:p-6 {$darkMode ? 'dark' : ''}">
    <DevelopmentPopup />
    <div class="bg-white dark:bg-black">
        <div class="box-border min-h-screen">
            <Header />
            <slot />
        </div>
        <Footer />
    </div>
</div>
