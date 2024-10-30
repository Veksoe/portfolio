<script setup>
import ProjectCards from "../components/ProjectCards.vue"

</script>

<template>
    <main>
        <h1>Projekter</h1>
        <section class="webProjects">
            <ProjectCards />
        </section>
    </main>

</template>

<style scoped>
h1 {
    font-size: 4rem;
    text-align: center;
    grid-column: 2/-2;
    margin-bottom: 0;
}
</style>
