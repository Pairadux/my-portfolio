<script lang="ts">
    import Icon from "#lib/util/Icon.svelte";

    function toggleTheme() {
        const dark = document.documentElement.classList.toggle("dark");
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
        } catch {}
    }
</script>

<button
    type="button"
    class="text-blue-500"
    aria-label="Toggle dark mode"
    onclick={toggleTheme}>
    <Icon
        name="moon"
        class="hidden h-12 w-12 md:h-6 md:w-6 dark:block" />
    <Icon
        name="sun"
        class="h-12 w-12 md:h-6 md:w-6 dark:hidden" />
</button>
