import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../Landing.vue';

// use component: () => import('path') for lazy-loading.
const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: "/:pathMatch(.*)*",
        component: Landing
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;