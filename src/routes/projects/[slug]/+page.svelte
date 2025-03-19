<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import type { Project } from "$lib/data/projectCatalog";
    import ProseArticle from "$lib/ProseArticle.svelte";

    export let data: { component: typeof SvelteComponent; project: Project };

    const { component, project } = data;
</script>

<svelte:head>
    <title>Austin Gause | { project.title }</title>
    <meta name="description" content="{ project.description }" />
</svelte:head>

<section class="mb-16">
    <ProseArticle>
        <h1>{ project.title }</h1>

        <hr />
        <p class="font-bold text-red-500">NOTE:<br />THIS IS AN AI GENERATED, VERY ROUGH, "DRAFT"<br />The vast majority of this is probably not true or is overly exaggerated!<br />I just haven't had the time to write out the project details yet :)</p>
        <hr />
        <svelte:component this={ component } />
    </ProseArticle>
</section>

