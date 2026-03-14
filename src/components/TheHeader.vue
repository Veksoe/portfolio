<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// import Signature from '@/assets/icons/signature.vue'

const isAtTop = ref(true)

// Scroll-tærskler
const TOP_ENTER = 0
const TOP_LEAVE = 20

const onScroll = () => {
    if (window.scrollY <= TOP_ENTER) {
        isAtTop.value = true
    } else if (window.scrollY >= TOP_LEAVE) {
        isAtTop.value = false
    }
}

onMounted(() => {
    // Media query: kun kør scroll-script på md+ skærme
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleMediaChange = (e) => {
        if (e.matches || mediaQuery.matches) {
            window.addEventListener('scroll', onScroll)
        } else {
            window.removeEventListener('scroll', onScroll)
            isAtTop.value = true
        }
    }

    // Initial check
    handleMediaChange(mediaQuery)

    // Lyt på ændringer i viewport
    mediaQuery.addEventListener('change', handleMediaChange)

    // Cleanup
    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
        mediaQuery.removeEventListener('change', handleMediaChange)
    })
})
</script>

<template>
    <header class="sticky top-0 z-50 px-4 bg-[#F8F2E9] shadow-lg transition-all duration-300"
        :class="isAtTop ? 'py-4' : 'py-2'">
        <div class="max-w-[1950px] mx-auto flex justify-between md:grid md:grid-cols-3 items-center">

            <nav class="uppercase flex gap-8 justify-self-start ">
                <RouterLink to="/" class="font-bold! relative">Forside</RouterLink>
                <RouterLink to="/minprofil" class="font-bold! relative">Min Profil</RouterLink>
            </nav>

            <Signature class="hidden md:block mx-auto transition-all duration-300 text-black"
                :class="isAtTop ? 'w-24 h-24' : 'w-12 h-12'" stroke-width="0.3" />

            <div class="flex gap-8 justify-self-end items-center h-10 ">
                <a href="https://github.com/Veksoe" target="blank">
                    <font-awesome-icon :icon="['fab', 'github']"
                        class="text-2xl! transition-all duration-200 hover:text-3xl!" />
                </a>
                <a href="https://www.linkedin.com/in/annikavekso" target="blank">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']"
                        class="text-2xl! transition-all duration-200 hover:text-3xl!" />
                </a>
            </div>
        </div>
    </header>
</template>
