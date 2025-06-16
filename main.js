import { createApp } from 'vue';
import App from './src/App.vue';
import router from './src/js/router';
import './src/js/vendor';  // loads and registers GSAP plugins

createApp(App).use(router).mount('#app');

function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH());
window.addEventListener('orientationchange', setVH());
setVH();