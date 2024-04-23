<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

import { VueperSlides, VueperSlide } from '/node_modules/vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { store } from '../store.js'

export default {
    name: 'AppHome',
    components: {
        AppLoader,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            store,
            success: false,
            slider: [],
            posts: [],
            categories: []
        }
    },
    created() {
        this.loadHome();
        this.slides = [
            `${this.store.baseUrl}/storage/posts_image/JMbtigXLV7rtZEWCpX2zPJWzvVMuFqzMjafCPbHF.jpg`,
            `${this.store.baseUrl}/storage/posts_image/E57BrfnUNjexxq0elIlFsf8SKcT8tuKBm31AaPfP.jpg`,
            `${this.store.baseUrl}/storage/posts_image/R84XMkoRrf0qGpHSaVbQhpFevoBFbcJBXmpESTRZ.webp`,
            `${this.store.baseUrl}/storage/posts_image/PPyygjqPoG9QU2GBMS0g9QQkiHSgF75V3ta8BMA7.jpg`
        ];
        this.getLastArticles();
        this.getCategories();
    },
    methods: {
        loadHome() {
            setTimeout(() => {
                this.success = true;
            }, 2000);
        },
        getLastArticles() {
            axios.get(`${this.store.baseUrl}/api/posts/get_lasts_post`).then((response) => {
                this.posts = response.data.posts
            });
        },
        getCategories() {
            axios.get(`${this.store.baseUrl}/api/categories/get_categories_homepage`).then((response) => {
                this.categories = response.data.categories
            });
        }
    }
}
</script>
<template lang="">
    <div v-if="!success">
        <AppLoader />
    </div>
    <div v-else>
        <div>
            <vueper-slides autoplay :bullets="false" :pause-on-hover="true" :gap="3" fixed-height="700px" :slide-ratio="1/2" id="main-slider">
                <vueper-slide
                  v-for="(slide, i) in slides"
                  :key="i"
                  :image="slide"
                  >
                  <template #content>
                    <div class="vueperslide__content-wrapper">
                      <div>
                        <h1 class="text-white">FM Videogames Sample Blog</h1>
                        <h4 class="text-white">Esempio di applicazione CRUD realizzata con Vite e Laravel</h4>
                      </div>
                    </div>
                  </template>
</vueper-slide>
</vueper-slides>
</div>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="my-5">
                <h1 class="text-center">FM Videogames Sample Blog</h1>
                <h3 class="text-center">Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
    </div>
</div>
<div class="bg-primary-color w-100 d-flex">
    <div class="left-content">
        <img src="/gaming.jpg" alt="FM Videogames Sample Blog" class="img-fluid">
    </div>
    <div class="right-content text-white">
        <div class="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat sodales quam, ac efficitur orci dictum
            non. Aliquam vehicula sagittis elit ut ultricies. Ut lacus massa, gravida a ullamcorper eget, finibus et
            eros. Cras suscipit nisi at urna ultricies, eget hendrerit odio consequat. Nunc ac mi metus. Praesent eu
            ipsum eget urna suscipit iaculis. Sed laoreet orci nulla, quis aliquam felis volutpat et. Etiam euismod erat
            non nunc consequat porttitor. Aenean vel tellus sagittis, tempor massa eu, pharetra massa.
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h2 class="my-5">Gli ultimi articooli</h2>
            <h4 class="my-5">Leggi gli ultimi articoli pubblicati nel nostro blug</h4>
        </div>
        <div class="col-12">
            <vueper-slides class="no-shadow" :gap="3" :visible-slides="3" autoplay :pause-on-hover="true"
                :slide-ratio="1/4">
                <vueper-slide v-for="(post, i) in posts" :key="i"
                    :image="`${store.baseUrl}/storage/${post.cover_image}`">
                    <template #content>
                            <div class="vueperslide__content-wrapper">
                              <span>{{ post.title }}</span>
                            </div>
                          </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h2 class="my-5 text-center">Le categorie del blog</h2>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 p-0" v-for="(category, index) in categories" :key="index">
            <router-link :to="{ name: 'category-posts', params: { slug: category.slug } }" class="text-decoration-none">
                <div class="image-container">
                    <img :src="`${this.store.baseUrl}/storage/${category.cover_image}`" :alt="category.name"
                        class="img-fluid">
                    <div class="overlay">
                        <h4>{{category.name}}</h4>
                        <span>(posts: {{category.posts_count}})</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

@use '../styles/general.scss' as *;

.image-container {
    width: 100%;
    position: relative;

    .overlay {
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        transition: 0.3s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.75);
        }
    }
}

.vueperslides__arrows {
    color: $primary_color !important;
}

.left-content,
.right-content {
    width: 50%
}

#main-slider {
    .vueperslide__content-wrapper {
        background-color: rgba(0, 24, 59, 0.5);
        transition: 0.3s;
        position: relative;

        span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;

        }
    }
}

.vueperslides__bullet .default {
    background-color: #003b93;
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 16px;
    height: 16px;
}

.vueperslides__bullet--active .default {
    background-color: $primary_color;
}

.vueperslides__bullet span {
    display: block;
    color: #fff;
    font-size: 10px;
    opacity: 0.8;
}

.no-shadow {
    .vueperslide__content-wrapper {
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        position: relative;
        opacity: 0;

        &:hover {
            opacity: 1
        }

        span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;

        }
    }
}
</style>