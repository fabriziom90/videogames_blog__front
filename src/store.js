import { reactive } from 'vue';

export const store = reactive({
    baseUrl: '/samples/videogames_blog_back',
    success: true,
    menuItems: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'blog',
            label: 'Blog'
        },
        {
            name: 'contacts',
            label: 'Contatti'
        },
    ]
});