<template>
    <footer class="bg-[#F3E9DE] p-4 py-8">
        <div class="max-w-[1950px] grid md:grid-cols-2 gap-4 m-auto">
            <div class="text-center md:text-left">
                <h3 class="text-5xl">Annika Veksø</h3>
                <p> En engageret frontend-udvikler med gode kommunikationsevner,
                    der brænder for at skabe og udvikle sig.</p>
            </div>
            <div class="text-center md:justify-self-end">
                <h3 class="text-xl">Interesseret i at arbejde sammen?</h3>
                <p>Tøv ikke med at tage kontakt!</p>
                <a href="mailto:anniika-xb@live.dk" class=" inline-block py-4"><font-awesome-icon
                        :icon="['fas', 'envelope']" class="inline-block hover:underline" /> Anniika-xb@live.dk</a>
                <div class="flex  gap-4 justify-center">
                    <a href="https://github.com/Veksoe" target="blank" class="inline-block">
                        <font-awesome-icon :icon="['fab', 'github']"
                            class="text-2xl! transition-all duration-200 hover:text-3xl!" />
                    </a>
                    <a href="https://www.linkedin.com/in/annikavekso" target="blank" class="inline-block">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']"
                            class="text-2xl! transition-all duration-200 hover:text-3xl!" />
                    </a>
                </div>
            </div>
            <p class="text-center col-span-full mx-auto text-sm">&#169 Annika Veksø, 2026</p>
        </div>
    </footer>
</template>
<style scoped>
footer {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.295);

}
</style>