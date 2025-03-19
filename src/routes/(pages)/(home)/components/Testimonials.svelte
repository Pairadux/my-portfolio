<script lang="ts">
    import { assets } from "$app/paths";
</script>

<section class="flex w-full flex-col items-center">
    <figure class="w-4/5 px-2">
        <blockquote class="text-center text-xl/8 font-semibold sm:text-2xl/9 dark:text-white">
            <p>"Austin is pretty cool, makes some cool websites and stuff like that"</p>
        </blockquote>
        <figcaption class="mt-10">
            <img
                class="mx-auto h-10 w-10 rounded-full"
                src="{assets}/images/headshot/senior_photo_headshot_blue_bg.jpg"
                alt="" />
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                <div class="font-semibold dark:text-white">Austin Gause</div>
                <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    class="fill-black dark:fill-white">
                    <circle
                        cx="1"
                        cy="1"
                        r="1" />
                </svg>
                <div class="dark:text-white">MAKER of WEBSITE</div>
            </div>
        </figcaption>
    </figure>
</section>
