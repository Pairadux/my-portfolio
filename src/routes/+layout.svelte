<script lang="ts">
    import { dev } from "$app/environment";
    import { onMount } from "svelte";
    import { darkMode } from "$lib/libStore";
    import DevelopmentPopup from "./components/DevelopmentPopup.svelte";
    import Header from "./components/header/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import type { LayoutData } from './$types';

    export let data: LayoutData;

    let showDevPopup = false;

    onMount(() => {
        if (!dev) {
            const popupDismissed = localStorage.getItem("devPopupDismissed");
            if (!popupDismissed) {
                showDevPopup = true;
            }
        }
    });

    function handleProceed() {
        localStorage.setItem("devPopupDismissed", "true");
        showDevPopup = false;
    }
</script>

<div class="bg-blue-500 p-3 transition-colors md:p-6 {$darkMode ? 'dark' : ''}">
    {#if showDevPopup}
        <DevelopmentPopup on:proceed={handleProceed} />
    {/if}
    <div class="bg-white dark:bg-black">
        <div class="box-border min-h-screen">
            <Header />
            <slot />
        </div>
        <Footer socialLinks={data.socialLinks} />
    </div>
</div>
