import { createWebHistory, createMemoryHistory, createRouter } from 'vue-router';
import isSSR from '../helpers/ssr';

const history = isSSR ? createMemoryHistory() : createWebHistory();

export const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Home.vue')
        },
        {
            path: '/user/:id',
            name: 'profile',
            component: () => import('../components/Profile.vue'),
            props: true
        }
    ]
});