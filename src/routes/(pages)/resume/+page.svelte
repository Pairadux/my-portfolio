<script lang="ts">
    import Seo from "#lib/util/Seo.svelte";
    import Divider from "#lib/util/Divider.svelte";
    import ProseArticle from "#lib/util/ProseArticle.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    let resume = $derived(data.resume);

    const row = "flex flex-wrap justify-between gap-x-4";
</script>

<Seo
    title="Austin Gause | Resume"
    description={resume.summary.substring(0, 160)} />

<section class="flex">
    <ProseArticle>
        <!-- SUMMARY -->
        <h3 class="text-center dark:text-white">Summary</h3>
        <p>{resume.summary}</p>

        <!-- EDUCATION -->
        {#if resume.education && resume.education.length > 0}
            <h3 class="text-center dark:text-white">Education</h3>
            {#each resume.education as edu}
                <p>
                    <span class={row}>
                        <strong class="dark:text-white"
                            >{edu.institution}{#if edu.gpa}<span class="hidden sm:inline">, GPA {edu.gpa}</span>{/if}</strong>
                        <strong class="dark:text-white">{edu.location}</strong>
                    </span>
                    <span class={row}>
                        <em>{edu.degree}</em>
                        <em>{edu.endDate}</em>
                    </span>
                </p>
            {/each}
        {/if}

        <!-- EXPERIENCE -->
        {#if resume.experience && resume.experience.length > 0}
            <h3 class="text-center dark:text-white">Experience</h3>
            {#each resume.experience as exp}
                <p>
                    <span class={row}>
                        <strong class="dark:text-white">{exp.company}</strong>
                        <strong class="dark:text-white">{exp.location}</strong>
                    </span>
                    <span class={row}>
                        <em>{exp.position}</em>
                        <em>{exp.startDate} - {exp.endDate}</em>
                    </span>
                </p>
                {#if exp.responsibilities && exp.responsibilities.length > 0}
                    <ul>
                        {#each exp.responsibilities as responsibility}
                            <li>{responsibility}</li>
                        {/each}
                    </ul>
                {/if}
            {/each}
        {/if}

        <!-- SKILLS -->
        {#if resume.skills && resume.skills.length > 0}
            <h3 class="text-center dark:text-white">Skills</h3>
            <p>
                {#each resume.skills as skill, index}
                    <strong class="dark:text-white">{skill.category}:</strong> <span>{skill.items}</span>
                    {#if index < resume.skills.length - 1}<br />{/if}
                {/each}
            </p>
        {/if}

        <!-- ACTIVITIES -->
        {#if resume.activities && resume.activities.length > 0}
            <h3 class="text-center dark:text-white">Activities</h3>
            <p>
                {#each resume.activities as activity}
                    <span class={row}>
                        <span>{activity.activity}</span>
                        <span>{activity.date}</span>
                    </span>
                {/each}
            </p>
        {/if}

        <!-- CERTIFICIATIONS & ACHIEVEMENTS -->
        {#if resume.certifications && resume.certifications.length > 0}
            <h3 class="text-center dark:text-white">Certifications &amp; Achievements</h3>
            <p>
                {#each resume.certifications as cert}
                    <span class={row}>
                        <span>{cert.name}</span>
                        <span>{cert.date}</span>
                    </span>
                {/each}
            </p>
        {/if}

        <!-- FOOTNOTES -->
        {#if resume.footnotes}
            <Divider />
            <p class="text-sm">{resume.footnotes}</p>
        {/if}
    </ProseArticle>
</section>
