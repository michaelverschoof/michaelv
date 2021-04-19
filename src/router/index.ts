import { Routes } from '@/routes';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/home.vue';
import NotFound from '@/views/error/not-found.vue';

let delayHeroAnimation = false;

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: Routes.HOME,
        component: Home
    },
    {
        path: '/about-me',
        name: Routes.ABOUT,
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about.vue')
    },
    {
        path: '/portfolio',
        name: Routes.PORTFOLIO,
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/portfolio.vue')
    },
    {
        path: '/blog',
        name: Routes.BLOG,
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/blog.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to, from) => {
    delayHeroAnimation = Routes.HOME === from.name;
});

export {
    router,
    delayHeroAnimation
};
