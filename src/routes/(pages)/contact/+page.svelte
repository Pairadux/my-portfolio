<script lang="ts">
    import Divider from "#lib/util/Divider.svelte";
    import ProseArticle from "#lib/util/ProseArticle.svelte";

    const labelClass = "block text-base/7 font-medium text-black dark:text-white";
    const inputClass = "mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-300 outline-solid placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 focus:outline-solid dark:bg-black dark:text-white dark:outline-gray-600 dark:placeholder:text-gray-600";
</script>

<svelte:head>
    <title>Austin Gause | Contact</title>
    <meta
        name="description"
        content="Get in touch with Austin Gause." />
</svelte:head>

<section>
    <ProseArticle>
        <h2 class="not-prose heading-font text-center text-2xl text-black md:text-3xl dark:text-white">Thanks for taking the time to reach out.<br />How can I help?</h2>
        <Divider />
        <form
            class="not-prose"
            action="https://formspree.io/f/mkgjjwnw"
            method="POST">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label
                        for="first-name"
                        class={labelClass}>First name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        placeholder="John"
                        class={inputClass} />
                </div>

                <div class="sm:col-span-3">
                    <label
                        for="last-name"
                        class={labelClass}>Last name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        placeholder="Smith"
                        class={inputClass} />
                </div>

                <div class="sm:col-span-4">
                    <label
                        for="email"
                        class={labelClass}>Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="johnsmith@email.com"
                        class={inputClass} />
                </div>

                <div class="col-span-full">
                    <label
                        for="message"
                        class={labelClass}>Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Here is where you scream"
                        class={inputClass}></textarea>
                </div>
            </div>
            <div class="mt-8 flex justify-end">
                <button
                    type="submit"
                    class="rounded-md bg-blue-500 px-5 py-2 text-base font-semibold text-white shadow-xs hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 focus-visible:outline-solid">Submit</button>
            </div>
        </form>
    </ProseArticle>
</section>
