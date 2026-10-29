<script lang="ts">
    import ProseArticle from "#lib/util/ProseArticle.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    let resume = $derived(data.resume);
</script>

<svelte:head>
    <title>Austin Gause | Resume</title>
    <meta
        name="description"
        content={resume.summary.substring(0, 160)} />
</svelte:head>

<section class="mb-16 flex">
    <ProseArticle>
        <!-- SUMMARY -->
        <h3 class="text-center dark:text-white">Summary</h3>
        <p>{resume.summary}</p>

        <!-- EDUCATION -->
        {#if resume.education && resume.education.length > 0}
            <h3 class="text-center dark:text-white">Education</h3>
            {#each resume.education as edu}
                <p>
                    <span
                        ><strong class="dark:text-white"
                            >{edu.institution}{#if edu.gpa}<span class="hidden sm:inline">, GPA {edu.gpa}</span>{/if}</strong
                        ></span
                    ><span class="float-right"><strong class="dark:text-white">{edu.location}</strong></span>
                    <br />
                    <span><em>{edu.degree}</em></span><span class="float-right"><em>{edu.endDate}</em></span>
                </p>
            {/each}
        {/if}

        <!-- EXPERIENCE -->
        {#if resume.experience && resume.experience.length > 0}
            <h3 class="text-center dark:text-white">Experience</h3>
            {#each resume.experience as exp}
                <p>
                    <span><strong class="dark:text-white">{exp.company}</strong></span><span class="float-right"><strong class="dark:text-white">{exp.location}</strong></span>
                    <br />
                    <span><em>{exp.position}</em></span><span class="float-right"><em>{exp.startDate} - {exp.endDate}</em></span>
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
                {#each resume.activities as activity, index}
                    <span>{activity.activity}</span><span class="float-right">{activity.date}</span>
                    {#if index < resume.activities.length - 1}<br />{/if}
                {/each}
            </p>
        {/if}

        <!-- CERTIFICIATIONS & ACHIEVEMENTS -->
        {#if resume.certifications && resume.certifications.length > 0}
            <h3 class="text-center dark:text-white">Certifications &amp; Achievements</h3>
            <p>
                {#each resume.certifications as cert, index}
                    <span>{cert.name}</span><span class="float-right">{cert.date}</span>
                    {#if index < resume.certifications.length - 1}<br />{/if}
                {/each}
            </p>
        {/if}

        <!-- FOOTNOTES -->
        {#if resume.footnotes}
            <hr class="my-8 h-px border-2 border-dashed border-blue-500 dark:border-blue-500" />
            <p class="text-sm">{resume.footnotes}</p>
        {/if}
    </ProseArticle>
</section>
