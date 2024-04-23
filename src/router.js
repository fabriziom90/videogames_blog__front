import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppBlog from './pages/AppBlog.vue';
import AppNotFound from './pages/AppNotFound.vue';
import SinglePost from './pages/SinglePost.vue';
import CategoryPosts from './pages/CategoryPosts.vue';
import AppContactUs from './pages/AppContactUs.vue';
import AppThankYouPage from './pages/AppThankYouPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/blog/:slug',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/blog/category/:slug',
            name: 'category-posts',
            component: CategoryPosts
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: AppThankYouPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }