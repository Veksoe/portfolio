<script setup lang="ts">
import ProfilCards from '@/components/ProfilCards.vue';
import { onMounted, onUnmounted, ref } from 'vue';
const skills = [
    "Vue.js",
    "JavaScript/TypeScript",
    "Tailwind CSS",
    "Spiludvikling",
    "Figma",
    "Brugercentreret Design",
    "UX / UI Design",
    "Brugeroplevelser",
]
const currentIndex = ref(0)

let interval: number

onMounted(() => {
    interval = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % skills.length
    }, 2500) // skifter hver 2,5 sek.
})

onUnmounted(() => {
    clearInterval(interval)
})

</script>

<template>
    <main>
        <section class="mt-12!">
            <h1
                class="bg-[url(../assets/img/graphics/header-bg.svg))]  bg-no-repeat bg-center bg-cover pt-14 pb-24 text-5xl text-center mb-16">
                Min profil</h1>
            <div class="mx-4! xl:mx-auto!  relative flex flex-col gap-4 xl:w-[80%] 2xl:w-[60%]">
                <div class="bg-[var(--accent2-color)] p-8 rounded-md fit lg:mr-70 xl:mr-88 lg:pr-32">
                    <h2 class="text-2xl">Mit navn er Annika!</h2>
                    <p>Og jeg er en engageret og aspirerende frontend-udvikler der har en sult efter konstant at
                        forbedre mig og mestre nye udfordringer. Jeg har erfaring inde for brugercentreret design og
                        spiludvikling, så jeg er i god træning til at arbejde med brugerens behov i tankerne. Jeg er
                        ansvarsfuld og pålidelig, hvilket gør, at jeg kan håndtere opgaver effektivt og overholde
                        deadlines. Min kreative tilgang hjælper mig med at skabe funktionelle og visuelt tiltalende
                        hjemmesider, hvor brugeroplevelsen altid er i centrum.</p>
                </div>
                <div class="bg-[var(--primary-color)] p-8 rounded-md lg:ml-12 lg:mr-70 xl:mr-88">
                    <h2 class="text-2xl">Uddannelser</h2>
                    <ul>
                        <li>Medialogi - Aalborg Universitet (2019)</li>
                        <li>Multimedie Designer - Professionshøjskolen UCN (2025)</li>
                    </ul>
                </div>
                <div class="bg-[var(--accent1-color)] p-8 rounded-md  lg:ml-24 lg:mr-70 xl:mr-88">
                    <h2 class="text-2xl"> Jeg har arbejdet med <transition name="fade-slide" mode="out-in">
                            <span :key="skills[currentIndex]"
                                class="bg-[var(--secondary-color)] text-white text-lg px-4 py-2 rounded-md inline-block ml-3 font-medium text-center min-w-[150px]">
                                {{ skills[currentIndex] }}
                            </span>
                        </transition>
                    </h2>
                </div>
                <div class="hidden lg:block absolute  right-0 top-1/2 -translate-y-1/2">
                    <div class="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] flex justify-center items-center [mask-image:url('../assets/img/graphics/circle-mask.svg') ]
                      [-webkit-mask-image:url('../assets/img/graphics/circle-mask.svg')]
                      [mask-size:cover] [-webkit-mask-size:cover]
                      [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]
                      [mask-position:top] [-webkit-mask-position:top]">

                        <!-- Baggrunds-SVG, fungerer som border -->
                        <div class="absolute inset-0">
                            <img src="../assets/img/graphics/circle-bg-dark.svg" class="w-full h-full object-cover" />
                        </div>

                        <img src="../assets/img/minProfil.jpg" class="w-[390px] h-[390px] xl:w-[490px] xl:h-[490px] object-cover object-top!
                                [mask-image:url('../assets/img/graphics/circle-mask.svg')]
                                [-webkit-mask-image:url('../assets/img/graphics/circle-mask.svg')]
                                [mask-size:cover] [-webkit-mask-size:cover]
                                [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]
                                [mask-position:top] [-webkit-mask-position:top]" alt="Profilbillede" />
                    </div>
                </div>
            </div>
        </section>
        <section class="grid lg:grid-cols-3 gap-4 mx-4!">
            <h2 class="col-span-full text-3xl">Mine interesser er..</h2>
            <ProfilCards imageName="creating.jpg" altText="info.altText" heading="At skabe" description="Jeg har en stor interesse for at være kreativ og at skabe. Følelsen af at producere noget
                            andre
                            bliver glade for eller kan bruge, giver mig smil på læben. Jeg synes det er fedt at blive
                            udfordret i min kreativitet og prøve nye ting der kræver jeg skal tænke lidt ekstra over
                            tingene og går meget op i at det jeg laver skal se ordentligt ud." />
            <ProfilCards imageName="coding.jpg" altText="info.altText" heading="At kode" description="Der er noget helt vildt fantastisk over at sidde med så teknisk som kode, og løse
                            problematikker og så noget visuelt frem på en skærm. Jeg synes nogle gange det kan virke
                            helt magisk, hvordan ord, tegn og bogstaver kan sættes sammen og ud kommer der noget
                            grafisk. Alle de muligheder og måder der er at gøre ting på, får mig til at brænde for at
                            lærer nye ting og udvikle mig inden for faget." />
            <ProfilCards imageName="crochet.png" altText="info.altText" heading="At hækle" description="Som nævnt, er jeg generelt utrolig kreativ, men en af de ting jeg bruger mest tid på, er at
                        hækle. Jeg nyder at hækle især bamser, og synes det er sjovt at
                        finde på designs og lave nye ting. Det er en skøn måde at slappe af op og samtidig holde
                        hjernen i gang." />
        </section>
        <section
            class="bg-[url(../assets/img/graphics/bg-1.svg))]  bg-no-repeat bg-center bg-cover  flex items-center lg:gap-4 xl:gap-8 justify-center py-16 pr-4 lg:pl-4">
            <div class="hidden md:flex relative w-[350px] h-[350px]  justify-center items-center [mask-image:url('../assets/img/graphics/circle-mask.svg') ]
                      [-webkit-mask-image:url('../assets/img/graphics/circle-mask.svg')]
                      [mask-size:cover] [-webkit-mask-size:cover]
                      [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]
                      [mask-position:top] [-webkit-mask-position:top]">

                <!-- Baggrunds-SVG, fungerer som border -->
                <div class="absolute inset-0">
                    <img src="../assets/img/graphics/circle-bg-light.svg" class="w-full h-full object-cover" />
                </div>

                <img src="../assets/img/motivation.jpg" class="w-[340px] h-[340px] object-cover object-top!
            [mask-image:url('../assets/img/graphics/circle-mask.svg')]
            [-webkit-mask-image:url('../assets/img/graphics/circle-mask.svg')]
            [mask-size:cover] [-webkit-mask-size:cover]
            [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]
            [mask-position:top] [-webkit-mask-position:top]" alt="Profilbillede" />
            </div>
            <article class="bg-[#F8F2E9] shadow-md p-8 rounded-md inline-block ml-4 md:ml-0">
                <h2 class="text-2xl">Hvad min drivkraft er?</h2>
                <p>At skabe med henblik på at lave noget der er brugbart, er meget af det der holder mig motiveret på et
                    projekt. At vide at det jeg laver, er noget andre kan få glæde af eller får noget ud af, er den
                    fedeste følelse, og derfor brænder jeg efter at bruge mine evner inde for web-udvikling til at
                    udvikle sider der er responsive og som giver brugeren en god og mindeværdig oplevelse.</p>
            </article>
        </section>
        <section class="grid lg:grid-cols-3 gap-4 mx-4!">
            <h2 class="col-span-full text-3xl">Mine erfaringer er..</h2>
            <ProfilCards imageName="school.jpg" altText="info.altText" heading="Medialogi og Multimedie Designer"
                description="Foruden min vidergående uddannelse i multimediedesigner har jeg også en bachelor i medialogi, hvor jeg er blevet introduceret til en masse forskelligt viden inden for it-branchen. Under uddannelsen har jeg blandt andet lavet gruppeprojekter hvor jeg har arbejdet med problemløsning, brugerundersøgelser og evalueringer, brugercentreret design, forskellige programmeringssprog som blandt andet Python og C#." />
            <ProfilCards imageName="gym.jpg" altText="info.altText" heading="Gymnastik intruktør"
                description="Jeg har arbejdet som gymnastikinstruktør i omkring 10 år, hvor jeg har kunne glæde mig med at kaste med børn og tilrettelægge aktiviteter og opvisningsprogrammer, der har skulle passe til specifikke aldersgrupper. Det har styrket blandt andet mine kreative evner, men også mine evner til at tilrettelægge indhold efter en bestemt brugergruppe." />
            <ProfilCards imageName="work.jpg" altText="info.altText" heading="Erhvervserfaring"
                description="Udover mine 6 måneder som Graduate Web Developer hos JCD A/S, har jeg haft forskellige småjobs som tilkaldevikar, barnepige, kioskarbejde og arbejde på pizzaria hvor jeg har lært at bevare roen i pressede situationer. Jeg er vant til at tage hurtige beslutninger, tilpasse mig uforudsete udfordringer og arbejde fleksibelt, samtidig med at jeg sikrer velovervejede handlinger." />
        </section>
    </main>
</template>
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(8px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>