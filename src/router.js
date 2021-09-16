import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('./views/Menu.vue')
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('./views/Signin.vue')
        },
        {
            path: '/all-sections',
            name: 'all-sections',
            component: () => import('./views/AllSections.vue')
        },
        {
            path: '/section/:section_id',
            name: 'section',
            component: () => import('./views/Section.vue')
        },
        {
            path: '/end-category',
            name: 'end-category',
            component: () => import('./views/EndCategory.vue')
        },
        {
            path: '/end',
            name: 'end',
            component: () => import('./views/End.vue')
        },
        {
            path: '/credits',
            name: 'credits',
            component: () => import('./views/Credits.vue')
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
