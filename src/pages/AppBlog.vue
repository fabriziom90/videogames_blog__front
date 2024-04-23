<script>
import PostCard from '../components/PostCard.vue';
import AppLoader from '../components/AppLoader.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppBlog',
    components: {
        PostCard,
        AppLoader
    },
    data() {
        return {
            store,
            posts: [],
            categories: [],
            success: false,
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getPosts();
        this.getCategories();
    },
    methods: {
        getPosts(page_number) {
            axios.get(`${this.store.baseUrl}/api/posts`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                setTimeout(() => {
                    this.success = response.data.success;
                }, 2500);

                this.posts = response.data.results.data;
                this.currentPage = response.data.results.current_page
                this.lastPage = response.data.results.last_page
            });
        },
        getCategories() {
            axios.get(`${this.store.baseUrl}/api/categories`).then((response) => {

                this.categories = response.data.result;
            });
        }
    }
}
</script>
<template lang="">
    <div v-if="!success">
        <AppLoader />
    </div>
    <div class="my-5" v-else>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">FM Videogames Sample Blog</h1>
                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laborum? Minima pariatur magnam maxime quod reprehenderit temporibus amet sunt distinctio ratione tenetur? Assumenda, eligendi quam optio voluptatum doloribus commodi ratione!
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <router-link :to="{ name: 'category-posts', params: { slug: category.slug } }" class="badge-category me-2" v-for="category, index in categories" :key="index">{{ category.name }}</router-link>
                </div>
            </div>
            <div class="row">
                <PostCard v-for="post, index in posts" :key="index" :post="post"/>
            </div>

            
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center my-4">
                        <ul class="pagination">
                            <li class="me-2">
                                <button :class="currentPage == 1 ? 'disabled' : ''" class="primary-button" @click="getPosts(currentPage - 1)">
                                    Precendente
                                </button>
                            </li>
                            <li >
                                <button :class="currentPage == lastPage ? 'disabled' : ''" class="primary-button" @click="getPosts(currentPage + 1)">
                                    Successivo
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            

        </div>
    </div>
</template>
<style lang="scss" scoped></style>
