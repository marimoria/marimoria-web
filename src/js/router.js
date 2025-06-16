import { createRouter, createWebHashHistory } from 'vue-router';
import Landing from '../Landing.vue';
import Portfolio from '../Portfolio.vue'

// use component: () => import('path') for lazy-loading.
const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: "/portfolio",
        component: Portfolio
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