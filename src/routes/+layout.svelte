<script lang="ts">
    import Header from "$lib/header/Header.svelte";
    import Footer from "$lib/Footer.svelte";
      import { darkMode } from "$lib/libStore"

    import DevelopmentPopup from "$lib/DevelopmentPopup.svelte";
</script>

<div class="bg-blue-500 p-3 md:p-6 transition-colors { $darkMode ? 'dark' : '' }">
    <DevelopmentPopup />
    <div class="bg-white dark:bg-black">
        <div class="box-border min-h-screen">
            <Header />
            <slot />
        </div>
        <Footer />
    </div>
</div>
