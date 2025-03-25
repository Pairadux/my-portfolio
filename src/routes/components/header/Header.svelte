<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { assets } from "$app/paths";
    import NavItem from "./NavItem.svelte";
    import ThemeToggleButton from "./ThemeToggleButton.svelte";

    // Responsive Viewport Check
    let isMobile = false;
    onMount(() => {
        const checkWidth = () => {
            isMobile = window.innerWidth < 768;
        };
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    });

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/resume", label: "Resume" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    let mobileNavOpen = false;
    const toggleMobileNav = () => {
        mobileNavOpen = !mobileNavOpen;
    };

    // Prevent scrolling when mobile nav is open
    $: {
        if (isMobile) {
            document.body.style.overflow = mobileNavOpen ? "hidden" : "auto";
        }
    }
</script>

<header class="mb-16 box-border bg-white p-4 shadow-sm dark:bg-black dark:shadow-lg">
    <div class="container m-auto flex flex-col items-center md:flex-row md:justify-around">
        <!-- Brand -->
        <div class="flex w-full items-center justify-around md:w-fit">
            <div class="h-6 w-6 md:hidden"></div>
            <a href="/"><h1 class="heading-font text-center text-3xl underline decoration-4 underline-offset-2 dark:text-white">Austin Gause</h1></a>
            <div class="h-6 w-6 md:hidden">
                <button
                    type="button"
                    class="h-6 w-6 md:hidden"
                    on:click={toggleMobileNav}>
                    <i class="fa-solid fa-bars text-2xl text-black dark:text-white" />
                </button>
            </div>
        </div>
        <!-- Nav -->
        <nav class="flex justify-center">
            {#if isMobile}
                {#if mobileNavOpen}
                    <div
                        transition:fade={{ duration: 300 }}
                        class="fixed inset-0 z-20 flex h-screen w-full flex-col items-center gap-16 bg-white pt-16 dark:bg-black">
                        <img
                            src={`${assets}/images/brand-logo/pairadux-logo.svg`}
                            alt=""
                            class="h-32 w-32 rounded-full bg-blue-500" />
                        <div class="flex flex-col items-center justify-center gap-16">
                            {#each navItems as item}
                                <button
                                    type="button"
                                    on:click={toggleMobileNav}>
                                    <NavItem
                                        classes="text-3xl"
                                        href={item.href}
                                        label={item.label} />
                                </button>
                            {/each}
                        </div>
                        <ThemeToggleButton />
                    </div>
                {/if}
            {:else}
                <div class="container hidden flex-row items-center justify-around gap-8 md:flex">
                    {#each navItems as item}
                        <NavItem
                            classes=""
                            href={item.href}
                            label={item.label} />
                    {/each}
                    <ThemeToggleButton />
                </div>
            {/if}
        </nav>
    </div>
</header>
