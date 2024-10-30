// router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectCaseView from './views/ProjectCaseView.vue'
import AboutMeView from './views/AboutMeView.vue'



const router = createRouter({
    history: createWebHistory(),
    // Adds the class "active" to the page the user is currently visiting.
    linkActiveClass: 'active',
    // The pages/routes for the site
    routes: [
        {
            path: '/class/MMD-CSD-S23/10191754/portfolio/index.html',
            name: 'home',
            component: HomeView
        },
        {
            path: '/class/MMD-CSD-S23/10191754/portfolio/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            // Dynamisk rute med slug som parameter. Her har vi oprettet en dynamisk rute for projekt-detaljer med stien '/projects/:slug'. Parameteren :slug gør, at du kan bruge projektets slug til at navigere til det specifikke projekt.
            path: '/class/MMD-CSD-S23/10191754/portfolio/projects/:slug',
            name: 'project-details',
            component: ProjectCaseView,
            props: true // Dette gør, at vi kan få adgang til sluggen som en prop i komponenten
        }, {
            path: '/class/MMD-CSD-S23/10191754/portfolio/aboutme',
            name: 'about-me',
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