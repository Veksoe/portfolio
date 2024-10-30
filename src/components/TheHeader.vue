<template>
    <header>
        <a href="mailto:anniika-xb@live.dk" class="contact">
            <font-awesome-icon :icon="['fas', 'envelope']" /> anniika-xb@live.dk
        </a>
        <nav class="globalNav">
            <RouterLink to="/class/MMD-CSD-S23/10191754/portfolio/index.html">Forside</RouterLink>
            <RouterLink to="/class/MMD-CSD-S23/10191754/portfolio/projects">Projekter</RouterLink>
            <RouterLink to="/class/MMD-CSD-S23/10191754/portfolio/aboutme">Om Mig</RouterLink>
        </nav>
        <div class="externalLinks">
            <a href="https://github.com/Veksoe">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="www.linkedin.com/in/annikavekso">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
        </div>

    </header>
</template>

<style scoped>
header {
    background: #8CA69E;
    display: grid;
    grid-template-columns: 10% 1fr 3fr 1fr 10%;
    align-items: center;
    position: sticky;
    top: 0px;
    z-index: 100;

    svg {
        width: 15px;
    }

    a {
        display: block;
        text-decoration: none;
        color: #160F0E;
        font-weight: 500;
    }

    .contact {
        padding: 10px 10px;
        grid-column: 2;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: .9rem;
        font-weight: 600;

    }

    nav {
        display: flex;
        grid-column: 3;
        justify-content: center;

        a {
            padding: 10px 32px;
            background-image: url(../assets/img/decor4.svg);
            transition: .3s;
            border-radius: 5px;
            font-family: "Bubblegum Sans", sans-serif;
            letter-spacing: 1px;
            font-size: 1.2rem;
        }



        a:hover:not(.active) {
            background-image: url(../assets/img/decor4.svg);
            transform: translateY(10px);
        }

        a:active {
            transform: scale(.9) translateY(10px);
        }

        .active {
            transform: translateY(20px);
            text-transform: uppercase;
        }
    }

    .externalLinks {
        display: flex;
        gap: 16px;
        grid-column: 4;
        justify-content: end;
        padding: 10px 10px;

        a {
            transition: .3s;
        }

        a:hover {
            transform: scale(1.4);
        }
    }
}
</style>
