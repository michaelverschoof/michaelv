import { Routes } from '@/routes';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/home.vue';
import NotFound from '@/views/error/not-found.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: Routes.HOME,
        component: Home,
        meta: { id: 0 }
    },
    {
        path: '/about-me',
        name: Routes.ABOUT,
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about.vue'),
        meta: { id: 1 }
    },
    {
        path: '/portfolio',
        name: Routes.PORTFOLIO,
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/portfolio.vue'),
        meta: { id: 2 }
    },
    {
        path: '/blog',
        name: Routes.BLOG,
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/blog.vue'),
        meta: { id: 3 }
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFound,
        meta: { id: 99 } // TODO: Check if we actually need the meta here
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export {
    router
};
