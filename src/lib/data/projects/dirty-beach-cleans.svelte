<script lang="ts">
    // import { assets } from "$app/paths";
    import ProseArticle from "$lib/general/ProseArticle.svelte";
    export let title = "Dirty Beach Cleans";
</script>

<section class="mb-16">
    <ProseArticle>
        <h1>{title}</h1>

        <hr />
        <p class="font-bold text-red-500">NOTE:<br />THIS IS AN AI GENERATED, VERY ROUGH, "DRAFT"<br />The vast majority of this is probably not true or is overly exaggerated!<br>I just haven't had the time to write out the project details yet :)</p>
        <hr />

        <h2>Project Link</h2>
        <a target="_blank" href="https://www.dirtybeachcleans.com">www.dirtybeachcleans.com</a>

        <h2>Project Overview</h2>
        <p>Dirty Beach Cleans is a single-page website dedicated to raising awareness about beach pollution and encouraging community participation in beach clean-up efforts. Built with plain HTML and Tailwind CSS, this site provides essential information, action steps, and visual content to inspire viewers to contribute to cleaner beaches.</p>

        <h2>Technologies Used</h2>
        <ul>
            <li><strong>HTML:</strong> Used to structure the content on the page, keeping it simple and accessible.</li>
            <li><strong>Tailwind CSS:</strong> Tailwind’s utility-first approach allowed for rapid styling with a clean, minimalist design, aligning with the environmental theme of the project.</li>
            <li><strong>GitHub Pages:</strong> The site is hosted on GitHub Pages, providing a free and easy way to make the site accessible to the public.</li>
        </ul>

        <h2>Design and Development</h2>
        <p>The Dirty Beach Cleans site was designed to be visually engaging yet straightforward, featuring bold, clear messages and high-impact visuals. The layout guides visitors through sections that explain the importance of beach clean-ups, showcase recent efforts, and offer ways to get involved. Tailwind CSS made it easy to create a responsive layout, ensuring the site looks good on both desktop and mobile devices.</p>

        <h2>Features</h2>
        <ul>
            <li><strong>Single Page Layout:</strong> All content is accessible on a single page, providing a seamless, user-friendly experience.</li>
            <li><strong>Responsive Design:</strong> The site adapts to various screen sizes, ensuring accessibility on all devices.</li>
            <li><strong>Action-Oriented Sections:</strong> Each section encourages visitors to learn about, engage with, and take action toward cleaner beaches.</li>
        </ul>

        <h2>Goals and Impact</h2>
        <p>The main goal of Dirty Beach Cleans is to spread awareness about the effects of pollution on coastal ecosystems and inspire community involvement in clean-up efforts. Through clear, impactful content and a simple design, the site aims to motivate viewers to participate in or organize beach clean-ups in their areas.</p>

        <h2>What I Would Have Done Differently</h2>
        <p>Use some kind of front-end framework, possibly something like bootstrap to make it more seamless and easy.</p>

        <h2>Conclusion</h2>
        <p>Dirty Beach Cleans reflects my commitment to environmental causes and my skill in creating clean, effective web designs with minimal resources. By building this site with plain HTML and Tailwind CSS, I kept the focus on accessibility, simplicity, and the urgent message of environmental action.</p>

        <h2>Contact Information</h2>
        <p>For more information or to get involved, please reach out via the contact section on the Dirty Beach Cleans site.</p>
    </ProseArticle>
</section>
