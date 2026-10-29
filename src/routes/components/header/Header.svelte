<script lang="ts">
    import { fade } from "svelte/transition";
    import Icon from "#lib/util/Icon.svelte";
    import NavItem from "./NavItem.svelte";
    import ThemeToggleButton from "./ThemeToggleButton.svelte";

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/resume", label: "Resume" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    let mobileNavOpen = $state(false);
    const closeMobileNav = () => {
        mobileNavOpen = false;
    };

    // Prevent scrolling when mobile nav is open
    $effect(() => {
        document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    });
</script>

<svelte:window
    onkeydown={(event) => {
        if (event.key === "Escape") closeMobileNav();
    }} />

<header class="shadow-b shadow-b-strong mb-16 box-border bg-white p-4 dark:bg-black">
    <div class="container m-auto flex flex-col items-center md:flex-row md:justify-around">
        <!-- Brand -->
        <div class="flex w-full items-center justify-around md:w-fit">
            <div class="h-6 w-6 md:hidden"></div>
            <a href="/"><h1 class="heading-font text-center text-3xl underline decoration-4 underline-offset-2 dark:text-white">Austin Gause</h1></a>
            <button
                type="button"
                class="h-6 w-6 text-black md:hidden dark:text-white"
                aria-label="Open menu"
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-nav"
                onclick={() => (mobileNavOpen = true)}>
                <Icon
                    name="bars"
                    class="h-6 w-6" />
            </button>
        </div>
        <!-- Nav -->
        <nav class="hidden items-center justify-around gap-8 md:flex">
            {#each navItems as item}
                <NavItem
                    classes="text-xl"
                    href={item.href}
                    label={item.label} />
            {/each}
            <ThemeToggleButton />
        </nav>
    </div>
</header>

{#if mobileNavOpen}
    <!-- Safari colors its toolbars from fixed elements at the screen edges, but not while they fade in, -->
    <!-- so the menu's top and bottom borders skip the fade (in their own block so they leave instantly too) -->
    <div class="fixed inset-x-0 top-0 z-20 h-3 bg-blue-500 md:hidden"></div>
    <div class="fixed inset-x-0 bottom-0 z-20 h-3 bg-blue-500 md:hidden"></div>
{/if}

{#if mobileNavOpen}
    <div
        id="mobile-nav"
        transition:fade={{ duration: 300 }}
        class="fixed inset-x-0 inset-y-3 z-20 flex bg-blue-500 md:hidden">
        <nav
            class="shadow-frame shadow-frame-strong relative mx-3 flex w-full grow flex-col items-center justify-center gap-16 bg-white dark:bg-black"
            style="padding-top: max(4rem, env(safe-area-inset-top));">
            <button
                type="button"
                class="absolute top-4 right-4 h-6 w-6 text-black dark:text-white"
                aria-label="Close menu"
                onclick={closeMobileNav}>
                <Icon
                    name="xmark"
                    class="h-6 w-6" />
            </button>
            <h1 class="heading-font text-center text-3xl underline decoration-4 underline-offset-2 dark:text-white">Austin Gause</h1>
            <div class="flex flex-col items-center justify-center gap-16">
                {#each navItems as item}
                    <NavItem
                        classes="text-2xl"
                        href={item.href}
                        label={item.label}
                        onclick={closeMobileNav} />
                {/each}
            </div>
            <ThemeToggleButton />
        </nav>
    </div>
{/if}
