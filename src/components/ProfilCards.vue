<script setup>
import { computed } from 'vue'
const props = defineProps({
    imageName: { type: String, required: true },
    altText: { type: String, required: true },
    heading: { type: String, required: true },
    description: { type: String, required: true }
})
const imageSrc = computed(() => {
    return new URL(`../assets/img/${props.imageName}`, import.meta.url).href
})
</script>

<template>
    <article class=" relative  flex-none basis-[calc(50%-2.5rem)] lg:basis-[calc(33.333%-2.5rem)] relative pt-[125px]">
        <img :src="imageSrc" :alt="altText"
            class="border-[var(--accent1-color)] border-solid border-4  rounded-full absolute -top-[0px] left-1/2 -translate-x-1/2 w-[250px] h-[250px] shadow-md" />
        <div class="bg-[var(--primary-color)]/50 p-8 pt-[155px] text-center -mt-4 h-full">
            <h3 class="text-xl  font-bold">{{ heading }}</h3>
            <p class="mt-2">{{ description }}</p>
        </div>

    </article>

</template>
