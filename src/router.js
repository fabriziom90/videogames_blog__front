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
            path: '/samples/videogames_blog_front/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/samples/videogames_blog_front/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/samples/videogames_blog_front/blog/:slug',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/samples/videogames_blog_front/blog/category/:slug',
            name: 'category-posts',
            component: CategoryPosts
        },
        {
            path: '/samples/videogames_blog_front/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/samples/videogames_blog_front/thank-you',
            name: 'thank-you',
            component: AppThankYouPage
        },
        {
            path: '/samples/videogames_blog_front/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }