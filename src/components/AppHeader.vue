<script>

import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            active: false
        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="/mylogo.png" alt="FM Videogames Sample Blog" class="vertical-align-middle me-3" width="50px">
                    <h4 class="vertical-align-middle text-white d-inline-block m-0">FM Videogames Sample Blog</h4>
                </div>
                <div class="col-6">
                    <div class="float-end mt-2">
                        <ul class="list-unstyled d-flex align-items-center mb-0">
                            <li v-for="item, index in store.menuItems" :key="index">
                                <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                                <!-- <div v-else class="dropdown cursor-pointer">
                                    <div @click="this.active = !this.active">Blog</div>
                                    <ul class="list-unstyled" v-if="this.active">
                                        <li><router-link :to="{ name: 'blog-frontend' }">Frontend</router-link></li>
                                        <li><router-link :to="{ name: 'blog-backend' }">Backend</router-link></li>
                                    </ul>
                                </div> -->
                            </li>
                            <li>
                                <a href="http://127.0.0.1:8000/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/general' as *;
@use '../styles/partials/variables' as *;

.cursor-pointer {
    cursor: pointer
}

.vertical-align-middle {
    vertical-align: middle;
}
</style>