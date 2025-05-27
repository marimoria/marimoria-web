import { createRouter, createWebHashHistory } from 'vue-router';
import Landing from '../Landing.vue';
import Home from '../Home.vue'

// use component: () => import('path') for lazy-loading.
const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/:pathMatch(.*)*",
        component: Landing
    }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;