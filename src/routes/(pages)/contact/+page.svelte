<script lang="ts">
    import ProseArticle from "$lib/util/ProseArticle.svelte";
</script>

<svelte:head>
    <title>Austin Gause | About</title>
    <meta
        name="description"
        content="The Amazing World of Austin" />
</svelte:head>

<section class="mb-16">
    <ProseArticle>
        <h2 class="text-center">Thanks for taking the time to reach out.<br />How can I help?</h2>
        <hr />
        <form
            class="not-prose"
            action="https://formspree.io/f/mkgjjwnw"
            method="POST">
            <div class="border-b border-gray-300 pb-12 dark:border-gray-600">
                <div class="space-y-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label
                                for="first-name"
                                class="block text-sm/6 font-medium text-black dark:text-white">First name</label>
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    placeholder="John"
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6 dark:bg-black dark:text-white dark:outline-gray-600 dark:placeholder:text-gray-600" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                for="last-name"
                                class="block text-sm/6 font-medium text-black dark:text-white">Last Name</label>
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autocomplete="family-name"
                                    placeholder="Smith"
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6 dark:bg-black dark:text-white dark:outline-gray-600 dark:placeholder:text-gray-600" />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label
                                for="email"
                                class="block text-sm/6 font-medium text-black dark:text-white">Email</label>
                            <div class="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    placeholder="johnsmith@email.com"
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6 dark:bg-black dark:text-white dark:outline-gray-600 dark:placeholder:text-gray-600" />
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label
                                for="message"
                                class="block text-sm/6 font-medium text-black dark:text-white">Message</label>
                            <div class="mt-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="8"
                                    placeholder="Here is where you scream"
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6 dark:bg-black dark:text-white dark:outline-gray-600 dark:placeholder:text-gray-600"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    class="text-sm/6 font-semibold text-black dark:text-white">Cancel</button>
                <button
                    type="submit"
                    class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Save</button>
            </div>
        </form>
    </ProseArticle>
</section>
