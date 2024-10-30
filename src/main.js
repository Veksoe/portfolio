import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import router */
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowUp, faEnvelope, faMapMarkerAlt, faMicrophoneAltSlash } from '@fortawesome/free-solid-svg-icons'
import { faCss3Alt, faFigma, faGitAlt, faGithub, faHtml5, faJs, faLinkedinIn, faVuejs, faWordpress } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope)
library.add(faGithub)
library.add(faLinkedinIn)
library.add(faMapMarkerAlt)
library.add(faCss3Alt)
library.add(faHtml5)
library.add(faJs)
library.add(faGitAlt)
library.add(faVuejs)
library.add(faWordpress)
library.add(faFigma)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
