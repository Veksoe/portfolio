<script setup>
import projects from "../assets/data/projects.json"
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

let project = ref(null);
const route = useRoute();


// Fetch project based on the slug in the route
onMounted(() => {
    const slug = route.params.slug;
    // Find projektet ved hjælp af sluggen
    project.value = projects.find(p => p.slug === slug);
});

// Lav en funktion til at generere billedstien for hvert projekt
function getImageUrl(image) {
    // new URL() opretter en absolut URL baseret på en relative sti og en base-URL.
    // Her konstrueres en sti til billedet ved at kombinere den relative sti fra "image"
    // med base-URL'en fra import.meta.url (som peger på den nuværende fil).
    return new URL(`../assets/${image}`, import.meta.url).href;
}

// Funktion til at tjekke om en linje starter med "-"
function isBulletPoint(text) {
    return text.startsWith("-");
}

</script>

<template>
    <main>

        <nav v-if="project">
            <div class="navContainer">
                <div v-for="section, index in Object.values(project.case_study)" :key="index">
                    <a :href="'#' + section.heading_slug">
                        {{ section.heading }}
                    </a>
                    <div v-if="index !== Object.values(project.case_study).length - 1" class="localNavDecor"> </div>
                </div>
            </div>
        </nav>
        <nav v-else></nav>
        <div v-if="project" class="projectContentContainer">
            <h1>{{ project.name }}</h1>
            <section>
                <div class="span3">
                    <h3>Case</h3>
                    <p>{{ project.problem }}</p>
                    <h3>Løsning</h3>
                    <p>{{ project.solution }}</p>
                    <h3>Mine roller</h3>
                    <p>{{ project.roles }}</p>
                    <a :href="project.links.github" target="_blank" class="btn"> Github</a>
                    <a :href="project.links.live_demo" target="_blank" class="btn">Live demo</a>
                </div>
                <img :src="getImageUrl(project.image)" :alt="project.alt_text" class="span3">
            </section>
            <section>
                <h2>Redskaber</h2>
                <div class="toolContainer">
                    <div v-for="tool, index in project.tools" :key="index">
                        <img :src="getImageUrl(tool.icon)" :alt="tool.name" class="span3">
                        <h4>{{ tool.name }}</h4>
                        <p>{{ tool.usage }}</p>
                    </div>
                </div>
            </section>
            <section v-for="section, index in project.case_study" :key="index">
                <h2 :id="section.heading_slug">{{ section.heading }}</h2>
                <!-- Carousel from third part code: https://ismail9k.github.io/vue3-carousel/getting-started.html -->
                <carousel :items-to-show="1.2" :wrap-around="true">
                    <slide v-for="image, index in section.images" :key="index">
                        <img :src="getImageUrl(image.image)" :alt="image.alt_text">
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
                <!-- <img v-for="image, index in project.case_study.section1.images" :key="index"
                        :src="getImageUrl(image.image)" :alt="image.alt_text" class="span3"> -->

                <div class="caseStudyContent">
                    <!-- Iterér over hver content-linje -->
                    <span v-for="(line, index) in section.content" :key="index">
                        <!-- Tjek om linjen starter med "-", og vis den som en liste hvis true -->
                        <ul v-if="isBulletPoint(line)">
                            <li>{{ line.substring(2) }}</li>
                        </ul>
                        <!-- Fjern bindestregen i starten -->
                        <!-- Ellers vis som paragraf -->
                        <p v-else>{{ line }}</p>
                    </span>
                </div>
            </section>
        </div>
        <section v-else>
            <p>Der ser ud til at være sket en fejl! Projektet kunne desværre ikke findes.</p>
        </section>
    </main>
</template>

<style scoped>
.span3 {
    grid-column: span 3;
}

main {
    grid-template-columns: 10% 1fr 9fr 10%;
}


nav {
    background: #8CA69E;
    margin-bottom: -32px;
    grid-column: span 2;
    padding: 32px;


    .navContainer {
        position: sticky;
        top: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            text-align: center;
        }

        a {
            text-decoration: none;
            color: #160F0E;
            font-size: 1.3rem;
            padding: 16px;
            font-weight: 700;
            transition: .3s;
            position: relative;

        }

        a::after {
            content: "";
            width: 100%;
            height: 2px;
            background: #E0CFB8;
            position: absolute;
            bottom: 10px;
            left: 0;
            transform: scaleX(0);
            transition: .3s;
        }

        a:hover::after {
            transform: scaleX(1);
        }

        .active::after {
            transform: scaleX(1);
        }

        .localNavDecor {
            width: 3px;
            height: 20px;
            background: #160F0E;
            margin: 16px auto;

        }
    }
}

.projectContentContainer {
    grid-column: 3/-2;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
}

section {
    grid-template-columns: repeat(6, 1fr);
    grid-column: 1/-1;
    row-gap: 0;

}

h1 {
    grid-column: 1/-1;
    text-align: center;
    font-size: 4rem;
    margin: 32px 0 0;
}

h2 {
    grid-column: 1/-1;
    text-align: center;
    font-size: 2.5rem;
    margin: 0;
    scroll-margin-top: 80px;
    /* Tilføj offset på 80px */
}

h3 {
    font-size: 1.3rem;
    margin-bottom: 0;
}

h4 {
    font-weight: bold;
    margin: 0;
}

p {
    margin-top: 0;
}

.btn {
    margin-right: 32px;
}

.toolContainer {
    grid-column: 1/-1;
    display: flex;
    gap: 32px;
    text-align: center;
    justify-content: center;

}

.carousel {
    grid-column: 1/-1;
    display: block;
    margin-bottom: 32px;

    img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
        object-fit: contain;
    }

    .carousel__slide {
        height: 600px;
        padding: 0 10px;
    }

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
    }

    .carousel__slide--next,
    .carousel__slide--prev {
        opacity: .5;

    }




}


.caseStudyContent {
    grid-column: 1/-1;
    columns: auto 2;
    column-gap: 32px;

    ul {
        margin: 0;
    }

    p {
        margin: 0;
    }

    span:not(:first-child) p {
        margin-top: 16px;
    }

}
</style>
