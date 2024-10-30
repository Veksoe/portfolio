<script setup>
import projects from "../assets/data/projects.json"


// Lav en funktion til at generere billedstien for hvert projekt
function getImageUrl(image) {
    // new URL() opretter en absolut URL baseret på en relative sti og en base-URL.
    // Her konstrueres en sti til billedet ved at kombinere den relative sti fra "image"
    // med base-URL'en fra import.meta.url (som peger på den nuværende fil).
    return new URL(`../assets/${image}`, import.meta.url).href;
}
</script>

<template>

    <article v-for="project in projects" :key="project.id">
        <!-- Brug den genererede billedsti i template -->
        <RouterLink :to="{ name: 'project-details', params: { slug: project.slug } }"><img
                :src="getImageUrl(project.image)" :alt="project.alt_text"></RouterLink>
        <h2>{{ project.name }}</h2>
        <p>{{ project.excerpt }}</p>
        <h3>Mine roller</h3>
        <p>{{ project.roles }}</p>
        <h3>Redskaber</h3>
        <p><span v-for="tool, index in Object.values(project.tools)" :key="index">{{ tool.name }}
                <span v-if="index !== Object.values(project.tools).length - 1"> - </span>
            </span>
        </p>
        <!-- Opdateret knap med router-link, der navigerer til projektdetalje siden -->
        <RouterLink :to="{ name: 'project-details', params: { slug: project.slug } }">
            <button>Læs mere om projektet</button>
        </RouterLink>
    </article>

</template>

<style scoped>
article {
    grid-column: span 5;
    text-align: center;
    margin-bottom: 32px;
}

img {
    height: 350px;
    width: 100%;
    object-fit: contain;
    transition: .3s;
}

img:hover {
    transform: scale(1.05);
}

h2,
h3 {
    margin: 0;
}

p {
    margin: 0 auto 20px auto;
}
</style>
