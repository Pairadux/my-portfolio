<script lang="ts">
    import { onMount } from "svelte";
    import { assets } from "$app/paths";
    import NavItem from "$lib/header/NavItem.svelte";
    import ThemeToggleButton from "$lib/general/ThemeToggleButton.svelte";

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
    ];

    let mobileNavOpen = false;
    let toggleMobileNav = function () {
        mobileNavOpen = !mobileNavOpen;
    };
</script>

<header class="mb-16 box-border bg-white p-4 shadow-sm dark:bg-black dark:shadow-lg">
    <div class="container m-auto flex flex-col items-center md:flex-row md:justify-around">
        <!-- Brand -->
        <div class="flex w-full items-center justify-around md:w-fit">
            <div class="h-6 w-6 md:hidden"></div>

            <a href="/"><h1 class="heading-font text-center text-3xl underline decoration-4 underline-offset-2 dark:text-white">Austin Gause</h1></a>

            {#if isMobile}
                <button
                    type="button"
                    class="h-6 w-6"
                    on:click={toggleMobileNav}>
                    <svg
                        class="fill-black dark:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </button>
            {/if}
        </div>
        <!-- Nav -->
        <nav class="flex justify-center">
            {#if isMobile}
                <div
                    class="fixed left-0 top-0 z-20 flex h-screen w-full flex-col items-center gap-16 bg-white pt-16 dark:bg-black"
                    class:hidden={!mobileNavOpen}
                    class:flex={mobileNavOpen}>
                    <img
                        src={`${assets}/images/brand-logo/pairadux-logo.svg`}
                        alt=""
                        class="h-32 w-32 rounded-full bg-blue-500" />
                    <div class="flex flex-col items-center justify-center gap-16">
                        {#each navItems as item}
                            <button type="button" on:click={toggleMobileNav} >
                                <NavItem classes="text-3xl" href={item.href} label={item.label} />
                            </button>
                        {/each}
                    </div>
                    <ThemeToggleButton />
                </div>
            {:else}
                <div class="container flex flex-row items-center justify-around gap-8">
                    {#each navItems as item}
                        <NavItem classes="" href={item.href} label={item.label} />
                    {/each}
                </div>
                <ThemeToggleButton />
            {/if}
        </nav>
    </div>
</header>
