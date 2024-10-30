<template>
    <main>
        <section class="hero">
            <div class="profileContainer"><img class="profilIMG" src="../assets/img/profil.png"
                    alt="A picture of a smiling Annika">
                <div class="floatingDecor" id="briefDecor">
                    <p>Jeg stræber efter at blive en dygtig og effektiv
                        frontend-udvikler. Jeg har en drøm at at
                        dygtiggøre mig til at kunne arbejde på et højt
                        nivuea, og altid lærer nyt.</p>
                </div>
            </div>
            <div class="infoContainer">
                <p class="introText">Mit navn er</p>
                <h1> Annika Veksø</h1>
                <h2>Frontend-Udvikler</h2>
                <div class="statusContainer">
                    <p> <span class="statusDot"></span> Åben for arbejde </p>
                    <p><font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Aalborg</p>
                </div>
            </div>
        </section>
        <section>
            <article class="introduction">
                <h2>Engageret frontend-udvikler med gode
                    kommunikationsevner</h2>
                <p>Jeg er en hårdarbejdende frontend-udvikler, med erfaring inde for brugercentreret
                    design og spiludvikling.</p>
                <p>Jeg er en pålidelig og tålmodig person, der nyder at bruge mine kreative evner til at
                    skabe heriblandt hjemmesider. Med erfaring indefor at arbejde med problemløsning og i
                    teams, er jeg en god kandidat til at arbejde sammen med andre.</p>
                <p>Mit mål er at kunne bruge mine kreative kompetencer sammen med min erfaring og
                    viden inden for HTML, CSS og JavaScript, til at bygge funktionelle hjemmesider, der giver
                    en god brugeroplevelse.</p>
                <h3>Mine skills:</h3>
                <div class="skillsContainer"><font-awesome-icon :icon="['fab', 'html5']" color="#EE9B0E" />
                    <font-awesome-icon :icon="['fab', 'css3-alt']" color="#189DCF" />
                    <font-awesome-icon :icon="['fab', 'js']" color="#E1D317" />
                    <font-awesome-icon :icon="['fab', 'git-alt']" color="#F03C2E" />
                    <font-awesome-icon :icon="['fab', 'vuejs']" color="#3fb27f" />
                    <font-awesome-icon :icon="['fab', 'wordpress']" color=" steelblue" />
                    <font-awesome-icon :icon="['fab', 'figma']" color="black" />
                </div>
            </article>
            <div class="decor"><img src="../assets/img/arbejde.png" alt=""></div>
        </section>
        <section>
            <img class="projects" src="../assets/img/projects.png" alt="">
            <article class="projektInfo">
                <h2>Nysgerrig på hvad jeg kan byde på?</h2>
                <p>Med en generel interesse i at designe, udvikle og skabe har jeg haft fingrene i flere forskellige
                    projekter, hvor mine evner som udvikler har været i spil i forskellige roller.</p>
                <RouterLink to="/class/MMD-CSD-S23/10191754/portfolio/projects" class="btn"> Se hvad jeg har lavet
                </RouterLink>

            </article>
        </section>
    </main>
</template>

<style scoped>
.hero {
    margin: 50px 0;
}

.profileContainer {
    grid-column: 1/6;
    justify-self: center;
    max-height: 600px;
    position: relative;

    img {
        mask-image: url(../assets/img/decor4.svg);
        mask-size: cover;
    }
}


#briefDecor {
    background-image: url(../assets/img/decor1.svg);
    width: 120%;
    bottom: 10px;
    left: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 70px;
}

.infoContainer {
    grid-column: 6/12;
    margin-top: 130px;
    margin-left: 40px;

    .introText {
        font-family: "Bubblegum Sans", sans-serif;
        font-size: 1.5rem;
        margin: 0;
    }

    h1 {
        font-size: 5.6rem;
        margin: 0 0;
        line-height: 1;
    }

    h2 {
        margin: 0;
    }

    .statusContainer {
        display: flex;
        align-items: center;
        gap: 32px;

        p {
            text-transform: uppercase;
        }

        .statusDot {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: rgb(50, 231, 75);
            border-radius: 50%;
        }
    }

}

.introduction {
    grid-column: 1/6;
    align-self: center;

    h3 {
        margin: 0;
    }

    .skillsContainer {
        display: flex;
        gap: 32px;
        font-size: 3rem;
        flex-wrap: wrap;
    }
}

.decor {
    grid-column: 6/12;
    background-image: url(../assets/img/decor2.svg);
    min-height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {

        mask-image: url(../assets/img/decor4.svg);
        mask-repeat: no-repeat;
        mask-position: center;
        height: 100%;
    }
}

.projects {
    grid-column: 1/7;
}

.projektInfo {
    grid-column: 7/12;
    align-self: center;


}
</style>
