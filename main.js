import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/js/router'
import './src/js/vendor'  // loads and registers GSAP plugins

createApp(App).use(router).mount('#app')