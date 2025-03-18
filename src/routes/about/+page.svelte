<script lang="ts">
    import { assets } from "$app/paths";
    import ProseArticle from "$lib/general/ProseArticle.svelte";
</script>

<svelte:head>
    <title>Austin Gause | About</title>
    <meta name="description" content="The Amazing World of Austin" />
</svelte:head>

<section class="mb-16">
    <ProseArticle>
        <h2>
            The Amazing World of <span aria-hidden="true" data-nosnippet><strike class="decoration-4 decoration-red-500">Gumball</strike></span> Austin
        </h2>
        <p>
            Greetings, earthlings &#128406! I'm Austin, a Computer Science major,
            network student assistant, and freelance web developer at Valdosta 
            State University. Some of my passions include programming, web development,
            Linux, and command-line applications. Whether it's building responsive websites,
            crafting efficient CLI tools, or exploring the intricacies of the Linux ecosystem,
            I'm always eager to dive into new challenges and expand my skill set.
        </p>

        <p>
            However, my journey into technology began long before I ever wrote a
            line of code. Even as a child, I was captivated by the mechanics of
            everyday devices and how they operated. Around the age of 10, I
            started taking apart electronics, driven by a curiosity to
            understand what made them "tick." This fascination with technology
            and problem-solving laid the foundation for my career today. While I
            spent some time as a flooring installer, learning the value of
            precision and hard work, my passion for tech has always been at the
            core of my personal and professional growth. Now, I channel that
            same curiosity and attention to detail into programming, web
            development, and exploring the command line.
        </p>

        <!-- Image of you working on flooring or a symbolic image of transition -->
        <figure>
            <img
                src="{assets}/images/about/people-renovating-house-concept.jpg"
                alt="From Flooring to Coding" />
            <figcaption>
                From Flooring to Coding: Building Foundations
            </figcaption>
        </figure>

        <p>
            My interest in programming began during high school when I first
            attempted to write code in Python. Despite my enthusiasm, I
            struggled to grasp many concepts due to the lack of formal teaching.
            I spent countless hours on YouTube tutorials, managing to build
            small apps and simple scripts but never quite feeling confident. It
            wasn’t until the summer before my freshman year that I decided to
            dive into web development, teaching myself the basics to gain a
            "head start." However, it was in my CS 1010 class during freshman
            year that everything truly clicked. With structured guidance and
            formal instruction, programming finally started to make sense,
            propelling me into exploring languages like Java and Rust, as well
            as web development frameworks like Svelte and Tailwind CSS. Today,
            as a freelance web developer and Network Student Assistant, I
            continue to expand my skills, delving into both development and
            networking fundamentals.
        </p>

        <!-- Image of a code snippet or you working on a project -->
        <figure>
            <img
                src="{assets}/images/about/html-css-collage-concept-with-person.jpg"
                alt="Deep in Code" />
            <figcaption>Lost in Lines of Code</figcaption>
        </figure>

        <p>
            Beyond the screen, I'm drawn to exploring a variety of interests. I
            have a genuine love for foreign languages and cultures, along with a
            deep appreciation for TV, music, gaming, and reading. Building
            computers has also become an interesting, hands-on hobby, letting me
            combine my technical skills with my craftsmanship. Gaming,
            especially, is a big passion, and it often fuels my curiosity and
            excitement for exploring new tech.
        </p>

        <figure>
            <img
                src="{assets}/images/about/gaming.jpg"
                alt="Immersed in Gaming" />
            <figcaption>Immersed in Gaming</figcaption>
        </figure>

        <p>
            I’m also active on campus as a member of the Association of
            Computing Machinery (ACM), where I previously served as Treasurer. I
            regularly attend on-campus events and occasionally volunteer on
            campus. Volunteering has given me the chance to connect with others
            and contribute to a supportive community.
        </p>

        <!-- Image of you participating in ACM or volunteering -->
        <figure>
            <img
                src="{assets}/images/about/different-people-doing-volunteer-work-with-food.jpg"
                alt="ACM Volunteering" />
            <figcaption>Community First: Volunteering with ACM</figcaption>
        </figure>

        <p>
            When I'm not coding or studying, you might find me experimenting
            with new CLI applications, working on personal projects, or
            researching emerging technologies. I'm always eager to tackle new
            challenges, collaborate on exciting projects, and continue growing
            both personally and professionally.
        </p>

        <p>
            Feel free to reach out if you'd like to collaborate, chat about
            tech, or <a
                href="https://www.youtube.com/watch?v=jabH3wRwiWQ"
                class="underline italic text-blue-500"
                >discuss the political and economic state of the world right
                now.</a>
            Let's build something amazing together!
        </p>
    </ProseArticle>
</section>
