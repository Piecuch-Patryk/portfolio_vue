import { createApp } from 'vue'
import App from './App.vue'
import Carousel3d from 'vue3-carousel-3d';
import "vue3-carousel-3d/dist/index.css"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faSquareGithub, faEnvelope, faCircleLeft, faCircleRight)
dom.watch();

createApp(App).use(Carousel3d).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
