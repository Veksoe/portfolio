<script setup lang="ts">
import SkillCards from '@/components/SkillCards.vue';
import skills from '../data/skills.json'
import InfoCards from '@/components/InfoCards.vue';

</script>

<template>
    <main>
        <section
            class="bg-[url(../assets/img/graphics/bg-1.svg))]  bg-no-repeat bg-center bg-cover w-full flex items-center xl:gap-8 justify-center py-16 my-0!">
            <div class="hidden md:flex relative w-[450px] h-[450px] justify-center items-center [mask-image:url('../assets/img/graphics/circle-mask.svg') ]
                      [-webkit-mask-image:url('../assets/img/graphics/circle-mask.svg')]
                      [mask-size:cover] [-webkit-mask-size:cover]
                      [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]
                      [mask-position:top] [-webkit-mask-position:top]">

                <!-- Baggrunds-SVG, fungerer som border -->
                <div class="absolute inset-0">
                    <img src="../assets/img/graphics/circle-bg-light.svg" class="w-full h-full object-cover" />
                </div>

                <img src="../assets/img/profil.jpg" class="w-[440px] h-[440px] object-cover object-top!
            [mask-image:url('../assets/img/graphics/circle-mask.svg')]
            [-webkit-mask-image:url('../assets/img/graphics/circle-mask.svg')]
            [mask-size:cover] [-webkit-mask-size:cover]
            [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]
            [mask-position:top] [-webkit-mask-position:top] " alt="Profilbillede" />
            </div>


            <div>
                <div class="bg-[var(--primary-color)] p-12 rounded-t-md lg:rounded-md ml-4 md:ml-0 mr-4">
                    <p class="font-bold">Mit navn er</p>
                    <h1 class="text-5xl md:text-7xl"> Annika Veksø</h1>
                    <h2 class="text-lg">Frontend-Udvikler</h2>
                    <div class="flex  flex-col gap-4 md:flex-row md:items-center uppercase ">
                        <p> <span class="w-4 h-4 rounded-full bg-emerald-500 inline-block"></span> Åben for arbejde </p>
                        <p><font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Aalborg</p>
                    </div>
                </div>
                <div class="bg-[#F7EEE5] shadow-lg p-8  rounded-md md:w-[500px] lg:mx-12 ml-4 md:ml-0 mr-4">
                    <h3 class="text-2xl">Min motivation?</h3>
                    <p>“ Jeg stræber efter at blive en dygtig og effektiv frontend-udvikler. Jeg har en drøm at at
                        dygtiggøre mig til at kunne arbejde på et højt nivuea, og altid lærer nyt. “</p>
                </div>
            </div>
        </section>
        <section class="text-center flex flex-col items-center gap-2 mx-4!">
            <h2 class="text-3xl">Engageret frontend-udvikler med gode kommunikationsevner</h2>
            <p>Med en kreativ tilgang og stærke kompetencer i HTML, CSS og JavaScript skaber jeg funktionelle og
                indbydende løsninger, der giver en god brugeroplevelse. Jeg trives i samarbejde, arbejder struktureret
                og har blik for detaljen – altid med brugeren i fokus.</p>
            <RouterLink to="/minprofil" class="btn"> Lær mere om hvem jeg er
            </RouterLink>
        </section>
        <section class="flex flex-wrap  sm:gap-x-4 lg:gap-x-10 gap-y-22 justify-center pt-12 mx-4!">
            <SkillCards v-for="skill in skills" :imageName="skill.imageName" :altText="skill.altText"
                :skill="skill.skill" :description="skill.description" />
        </section>
        <section
            class="flex flex-wrap sm:gap-x-4 lg:gap-x-10 0 gap-y-8 justify-center  lg:bg-[url(../assets/img/graphics/bg-2-medium.svg))]  bg-no-repeat bg-center bg-contain px-4">
            <InfoCards imageName="graduate.png" altText="Billede af en kop fra virksomheden JCD."
                heading="Graduate Web Developer"
                description="I 6 måneder var jeg hos JCD A/S som Graduate Web Developer, hvor jeg udviklede custom designs og hjemmesider i Umbraco. Jeg arbejdede både med små rettelser på kunders sider og interne projekter, og har erfaring med C#, TypeScript, Vue.js, Tailwind, Figma og Umbraco Backoffice. " />
            <InfoCards imageName="projects.png" altText="" heading="Multimedie Designer"
                description="På min 2-årige uddannelse som Multimedie Designer arbejdede jeg med design og udvikling af brugervenlige hjemmesider. Jeg brugte metoder til at forstå brugernes behov og omsatte dem til løsninger med HTML, JavaScript og Vue.js, kombineret med brugercentreret design og prototyping. " />
            <InfoCards imageName="ducktopia.png" altText="Cover billede til spillet Ducktopia" heading="Spiludvikling"
                description="Jeg har arbejdet med flere små computerspil, både gennem uddannelse og hobbyprojekter. Her har jeg designet 3D-modeller til omgivelser, bygget level design og udviklet brugergrænseflader, samtidig med at jeg samarbejdede med programmører for at skabe engagerende og sammenhængende spiloplevelser.." />
        </section>
    </main>
</template>
