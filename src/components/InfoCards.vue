<script setup>
import { computed } from 'vue'
const props = defineProps({
    imageName: { type: String, required: true },
    altText: { type: String, required: true },
    heading: { type: String, required: true },
    description: { type: String, required: true }
})
const imageSrc = computed(() => {
    return new URL(`@/assets/img/${props.imageName}`, import.meta.url).href
})
</script>

<template>
    <article class="  relative flex-none basis-full md:basis-[calc(50%-2.5rem)] lg:basis-[calc(33.333%-2.5rem)] ">
        <img :src="imageSrc" :alt="altText" class="w-full h-[250px] pr-4" />
        <div class="bg-[var(--accent2-color)] p-8  ml-4 -mt-4 ">
            <h3 class="text-xl  font-bold">{{ heading }}</h3>
            <p class="mt-2">{{ description }}</p>
        </div>

    </article>

</template>
