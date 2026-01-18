// router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutMeView from './views/MinProfilView.vue'



const router = createRouter({
    history: createWebHistory(),
    // Adds the class "active" to the page the user is currently visiting.
    linkActiveClass: 'active',
    // The pages/routes for the site
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/minprofil',
            name: 'min-profil',
            component: AboutMeView,
        },

    ],
    /*
     scrollBehavior er en funktion, der lader dig definere, hvordan scroll-positionen skal opføre sig ved navigation. Hvis der er en gemt position (når man f.eks. bruger back-button i browseren), gendanner den den position. Hvis ikke, scroller den automatisk til toppen af siden ({ top: 0 }).
    */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // Hvis der er en gemt position (fx. ved brug af browser-back-button)
            return savedPosition;
        } else {
            // Scroll altid til toppen af siden
            return { top: 0 };
        }
    }
})

export default router