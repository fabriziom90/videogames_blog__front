<script>
import { store } from '../store.js';

export default {
    name: 'PostCard',
    props: {
        post: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        createExcerpt() {
            return this.post.content.substr(0, 20) + "...";
        },
        getUrlImage() {
            let image;
            if (this.post.cover_image != null) {
                image = '/storage/' + this.post.cover_image;
            }
            else {
                image = '/img/aaaabbbb.jpg';
            }

            return `${this.store.baseUrl}${image}`;
        }
    }
}
</script>
<template lang="">
    <div class="col-12 col-md-6 col-lg-3">
        <router-link :to="{ name: 'single-post', params: { slug: post.slug } }">
            <div class="card mt-3">
                <img :src="getUrlImage()" alt="" class="card-img-top">
                <!-- <img :src="post.cover_image != null ? `${store.baseUrl}/storage/${post.cover_image}` : `${store.baseUrl}/storage/aaabbbb.jpg`" /> -->
                <div class="card-body">
                    <h4>
                        {{ post.title }}
                    </h4>
                    <!-- <p><strong>Categoria:</strong> {{ post.category.name }}</p> -->
                    <p>{{createExcerpt() }}</p>
                    <router-link class="primary-button" :to="{ name: 'single-post', params: { slug: post.slug } }">Continua a leggere</router-link>
                </div>
            </div>
        </router-link>
    </div>
</template>
<style lang="scss"></style>