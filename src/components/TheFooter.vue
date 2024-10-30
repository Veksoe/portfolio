<template>
    <footer>
        <div class="brand">
            <h3 class="name">Annika Veksø</h3>
            <p> En engageret frontend-udvikler med gode kommunikationsevner,
                der brænder for at skabe og udvikle sig.</p>
        </div>
        <div class="contact">
            <h3>Interesseret i at arbejde sammen?</h3>
            <a href="mailto:anniika-xb@live.dk" class="btn">Kontakt mig!</a>
        </div>
        <p class="copyright">&#169 Annika Veksø, 2024</p>
    </footer>
</template>

<style scoped>
footer {
    background: rgba(140, 166, 158, 0.5);
    display: grid;
    grid-template-columns: 10% 2fr 1fr 2fr 10%;
    padding: 20px 0;
    margin-top: 32px;

    .brand {
        grid-column: 2;

        h3 {
            font-size: 3.5rem;
            margin: 0;
        }

        p {
            margin: 0;
            font-size: .9rem;
        }
    }

    .contact {
        grid-column: 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-self: end;

        h3 {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 16px 0;
        }

    }

    .copyright {
        grid-column: 2/-2;
        justify-self: center;
        font-size: .8rem;
        font-weight: 500;
    }
}
</style>
