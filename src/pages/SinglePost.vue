<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'SinglePost',
    data() {
        return {
            store,
            post: null,
            success: null,
        }
    },
    created() {
        this.getPostData();
    },
    methods: {
        getPostData() {
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.post = response.data.post;
                    this.success = response.data.success;
                }
                else {
                    this.$router.push({ name: 'not-found' })
                }

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
            <div class="row" v-if="success == true">
                <div class="col-12">
                    <h1>{{ post.title }}</h1>
                </div>
                <div class="col-12">
                    <img class="cover_image" :src="`${this.store.baseUrl}/storage/${post.cover_image}`" :alt="post.title">
                    <div class="gallery">
                        <img class="gallery_image me-2 mt-2" v-for="image, index in post.image_gallery_post" :src="`${this.store.baseUrl}/storage/${image.path}`" :alt="post.title">
                    </div>
                </div>
                <div class="col-12">
                    <strong>Categoria:</strong> {{ post.category.name }}
                </div>
                <div class="col-12">
                    <strong>Lista tag:</strong>
                    <ul class="list-unstyled d-flex">
                        <li v-for="tag, index in post.tags" :key="index" class="me-2">
                            <span class="badge rounded-pill text-bg-primary">{{ tag.name }}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-12">
                    <p>
                        {{ post.content }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cover_image {
    width: 400px;
}

.gallery_image {
    width: calc(400px / 2 - 10px);
}
</style>