<script setup>
import { computed } from 'vue'
const props = defineProps({
    imageName: { type: String, required: true },
    altText: { type: String, required: true },
    skill: { type: String, required: true },
    description: { type: String, required: true }
})
const imageSrc = computed(() => {
    return new URL(`@/assets/icons/${props.imageName}`, import.meta.url).href
})
</script>

<template>
    <article class="bg-[var(--primary-color)]/50 p-6 pt-14 text-center relative shadow-md flex-none basis-full sm:basis-[calc(33.333%-16px)] 
         lg:basis-[calc(25%-2.5rem)]">
        <div
            class="bg-[var(--accent1-color)] p-4 rounded-full absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 shadow-md">
            <img :src="imageSrc" :alt="altText" />
        </div>
        <h3 class="text-xl mt-4 font-bold">{{ skill }}</h3>
        <p class="mt-2">{{ description }}</p>
    </article>

</template>
