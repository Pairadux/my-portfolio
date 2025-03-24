<script lang="ts">
    import { assets } from "$app/paths";
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();

    function onProceedClick() {
        dispatch("proceed");
    }
</script>

<dialog
    open
    class="fixed left-0 top-0 z-50 h-screen w-screen">
    <div class="flex h-full w-full flex-col items-center justify-center bg-white dark:bg-black">
        <img
            src="{assets}/icons/alert.svg"
            alt=""
            class="h-16" />
        <h2 class="text-2xl dark:text-white">This site is a work in progress</h2>
        <p class="w-3/4 text-center dark:text-white">If you wish to proceed, please click the button below.</p>
        <p class="w-3/4 text-center dark:text-white">
            Wondering what's left? Check the <a
                target="_blank"
                href="https://github.com/users/Pairadux/projects/3"
                class="italic text-blue-500 underline">roadmap</a
            >.
        </p>
        <form class="flex flex-col" method="dialog">
            <button class="mt-2 rounded-lg bg-black p-2 text-white dark:bg-white dark:text-black">Proceed</button>
            <button on:click={onProceedClick} class="mt-2 rounded-lg p-2 text-blac dark:text-white">Don't Show Again</button>
        </form>
    </div>
</dialog>
