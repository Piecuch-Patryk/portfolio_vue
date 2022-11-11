import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faGlobe, faSquareGithub, faEnvelope)
dom.watch();

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
