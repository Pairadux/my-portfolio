<script lang="ts">
    import { assets } from "$app/paths";
</script>

<dialog open class="fixed top-0 left-0 h-screen w-screen z-50">
    <div class="flex items-center justify-center flex-col h-full w-full dark:bg-black bg-white">
        <img src="{ assets }/images/icons/alert.svg" alt="" class="h-16">
        <h2 class="text-2xl dark:text-white">This site is a work in progress</h2>
        <p class="w-3/4 text-center dark:text-white">If you wish to proceed, please click the button below.</p>
        <p class="w-3/4 text-center dark:text-white">Wondering what's left? Check the <a href="https://github.com/users/Pairadux/projects/3" class="underline italic text-blue-500">roadmap</a>.</p>
        <form method="dialog">
            <button class="p-2 mt-2 bg-black dark:bg-white text-white dark:text-black rounded-lg">Proceed</button>
        </form>
    </div>
</dialog>
