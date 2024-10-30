<template>
    <main>
        <h1>Om mig</h1>
        <section class="imgContainer">
            <div class="floatingDecor" id="image1">
                <img src="../assets/img/aboutImg1.png" alt="">
            </div>
            <div class="floatingDecor" id="image2">
                <img src="../assets/img/aboutImg2.png" alt="">
            </div>
            <div class="floatingDecor" id="image3">
                <img src="../assets/img/aboutImg3.png" alt="">
            </div>
            <div class="floatingDecor" id="image4">
                <img src="../assets/img/aboutImg4.png" alt="">
            </div>
            <div class="floatingDecor" id="image5">
                <img src="../assets/img/aboutImg5.png" alt="">
            </div>
        </section>
        <section>
            <h2>Mine interesser er..</h2>
            <div class="galleriContainer">
                <article id="interest1">
                    <h3>At skabe</h3>
                    <div class="textContainer">
                        <h3>At skabe</h3>
                        <p>Jeg har en stor interesse for at være kreativ og at skabe. Følelsen af at producere noget
                            andre
                            bliver glade for eller kan bruge, giver mig smil på læben. Jeg synes det er fedt at blive
                            udfordret i min kreativitet og prøve nye ting der kræver jeg skal tænke lidt ekstra over
                            tingene.</p>
                    </div>
                </article>
                <article id="interest2">
                    <h3>At kode</h3>
                    <div class="textContainer">
                        <h3>At kode</h3>
                        <p> Der er noget helt vildt fantastisk over at sidde med så teknisk som kode, og løse
                            problematikker og så noget visuelt frem på en skærm. Jeg synes nogle gange det kan virke
                            helt magisk, hvordan ord, tegn og bogstaver kan sættes sammen og ud kommer der noget
                            grafisk. Alle de muligheder og måder der er at gøre ting på, får mig til at brænde for at
                            lærer nye ting og udvikle mig inden for faget.</p>
                    </div>
                </article>
                <article id="interest3">
                    <h3>At hækle</h3>
                    <div class="textContainer">
                        <h3>At hækle</h3>
                        <p>Som nævnt, er jeg generelt utrolig kreativ, men en af de ting jeg bruger mest tid på, er at
                            hækle. Jeg nyder at hækle især bamser, og synes det er sjovt at
                            finde på designs og lave nye ting. Det er en skøn måde at slappe af op og samtidig holde
                            hjernen i gang.</p>
                    </div>
                </article>
            </div>
        </section>
        <section class="drive">
            <article>
                <h2>Hvad min drivkraft er?</h2>
                <p>At skabe med henblik på at lave noget der er brugbart, er meget af det der holder mig motiveret på et
                    projekt. At vide at det jeg laver, er noget andre kan få glæde af eller får noget ud af, er den
                    fedeste følelse, og derfor brænder jeg efter at bruge mine evner inde for web-udvikling til at
                    udvikle sider der er responsive og som giver brugeren en god og mindeværdig oplevelse.</p>
            </article>
            <div>
                <img src="../assets/img/drive.png" alt="">
                <div class="floatingDecor" id="driveDecor1"></div>
                <div class="floatingDecor" id="driveDecor2"></div>
            </div>
        </section>
        <section>
            <h2>Mine erfaringer er..</h2>
            <div class="galleriContainer">
                <article id="experience1">
                    <h3>Multimediedesigner og medialog </h3>
                    <div class="textContainer">
                        <h3>Multimediedesigner og medialog </h3>
                        <p>Foruden min vidergående uddannelse i multimediedesigner har jeg også en bachelor i
                            medialogi, hvor jeg er blevet introduceret til en masse forskelligt viden inden for
                            it-branchen. Underuddannelsen har jeg blandt andet lavet gruppeprojekter hvor jeg har
                            arbejdet med problemløsning, brugerundersøgelser og evalueringer, brugercentreret
                            design, forskellige programmeringssprog som blandt andet Python og C#.</p>
                    </div>
                </article>
                <article id="experience2">
                    <h3>Gymnastik instruktør</h3>
                    <div class="textContainer">
                        <h3>Gymnastik instruktør</h3>
                        <p>Jeg har arbejdet som gymnastikinstruktør i omkring 10 år, hvor jeg har kunne glæde mig med at
                            kaste med børn og tilrettelægge aktiviteter og opvisningsprogrammer, der har skulle passe
                            til specifikke aldersgrupper. Det har styrket blandt andet mine kreative evner, men også
                            mine evner til at tilrettelægge indhold efter en bestemt brugergruppe.</p>
                    </div>
                </article>
                <article id="experience3">
                    <h3>Erhvervs erfaring</h3>
                    <div class="textContainer">
                        <h3>Erhvervs erfaring</h3>
                        <p>Med forskellig små-jobs som tilkaldevikar i vuggestuer og børnehaver, barnepige, kioskarbejde
                            og arbejde i et pizzaria, er jeg vant til at skulle risikerer at arbejde i pressede
                            situationer, hvor man nogle gange har skulle tage nogle hurtige beslutninger, eller være
                            mere fleksibel. Det ar bidraget til at styrke mine evner til at beholde roen i kaotiske
                            eller stressede situationer, og stadig kunne tage velovervejede beslutninger.</p>
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    row-gap: 0;
}

h1 {
    grid-column: 2/-2;
    text-align: center;
    font-size: 4rem;
    margin-bottom: 0;
}

h2 {
    grid-column: 1/-1;
    margin-bottom: 0;
}

section {
    display: block;
}

.imgContainer {
    height: 450px;

    img {
        mask-image: url(../assets/img/decor4.svg);
        mask-position: center;
        width: 95%;
        height: 95%;
    }
}

#image1,
#image2,
#image3,
#image4,
#image5 {

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
}

#image1 {
    background-image: url(../assets/img/decor3.svg);
    width: 300px;
    height: 320px;
}

#image2 {
    background-image: url(../assets/img/decor2.svg);
    width: 250px;
    height: 240px;
    left: 25%;
    bottom: 0;
}

#image3 {
    background-image: url(../assets/img/decor1.svg);
    width: 200px;
    height: 200px;
    left: 40%;
    top: 20px;
}

#image4 {
    background-image: url(../assets/img/decor3.svg);
    width: 260px;
    height: 240px;
    right: 25%;
    bottom: 40px;

}

#image5 {
    background-image: url(../assets/img/decor2.svg);
    width: 290px;
    height: 280px;
    right: 0;
    top: -20px;

}

.galleriContainer {
    grid-column: 1/-1;
    display: flex;

    gap: 32px;

    article {
        flex: 1;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.205);
        height: 250px;
        position: relative;
        transition: .3s;


        h3,
        p {
            margin: 0;
        }

        >h3 {
            border-radius: 0 0 5px 5px;
            width: 100%;
            text-align: center;
            padding: 5px;
            position: absolute;
            bottom: 0px;

        }

        .textContainer h3,
        p {
            opacity: 0;

        }


    }

    #interest1 {
        background-image: url(../assets/img/creating.jpg);
        background-position: center;
        background-size: cover;

        >h3 {
            background: rgb(209, 149, 137, .7);

        }
    }

    #interest2 {
        background-image: url(../assets/img/coding.jpg);
        background-position: center;
        background-size: cover;

        >h3 {
            background: rgb(244, 208, 160, .7);
        }
    }

    #interest3 {
        background-image: url(../assets/img/crochet.png);
        background-position: center;
        background-size: cover;

        >h3 {
            background: rgba(140, 166, 158, .7);
        }
    }

    article:hover {
        flex: 2;

    }

    article:hover .textContainer {
        height: 100%;
        background: rgba(255, 255, 255, 0.9);

    }

    article:hover .textContainer h3 {
        opacity: 100;
        position: relative;
        border-radius: 0 5px 0 0;
        width: 100%;
        text-align: center;
        padding: 32px 32px 0 32px;
    }

    article:hover p {
        opacity: 100;
        padding: 0 32px;
        border-radius: 0 0 5px 0;
        max-width: unset;
    }


    article:hover>h3 {
        opacity: 0;
    }


    #experience1 {
        background-image: url(../assets/img/school.jpg);
        /* Fotos af Pixabay: https://www.pexels.com/da-dk/foto/bygning-kontor-skole-teknologi-159213/ */
        background-position: center;
        background-size: cover;

        >h3 {
            background: rgba(140, 166, 158, .7);

        }
    }

    #experience2 {
        background-image: url(../assets/img/gym.jpg);
        background-position: center;
        background-size: cover;

        >h3 {
            background: rgb(209, 149, 137, .7);
        }
    }

    #experience3 {
        background-image: url(../assets/img/work.jpg);
        /* Fotos af Oleksandr P: https://www.pexels.com/da-dk/foto/landskab-mode-haender-kaerlighed-3036405/ */
        background-position: center;
        background-size: cover;

        >h3 {
            background: rgb(244, 208, 160, .7);
        }
    }
}

.drive {
    display: flex;
    gap: 32px;
    justify-content: space-between;


    article {
        background-image: url(../assets/img/speechboble.svg);
        background-position: center;
        background-size: cover;
        margin: 100px 0;
        padding: 100px 220px 100px 100px;
        max-height: 400px;

        h3,
        p {
            margin: 0;
        }
    }

    div {
        width: 50%;
    }

    img {
        max-height: 600px;
        width: 80%;
        mask-image: url(../assets/img/decor4.svg);
        display: block;
        margin: auto;
    }

    #driveDecor1 {
        background-image: url(../assets/img/decor2.svg);
        width: 180px;
        height: 160px;
        right: 0;
        bottom: 90px;
        z-index: -1;
    }

    #driveDecor2 {
        background-image: url(../assets/img/decor3.svg);
        width: 250px;
        height: 250px;
        z-index: -1;
        right: 250px;
        top: 50px;
    }
}
</style>