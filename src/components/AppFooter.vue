<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img src="/mylogo.png" alt="FM Videogames sample blog" class="vertical-align-middle me-3" width="50px">
                    <h4 class="vertical-align-middle text-white d-inline-block m-0">FM Videogames sample blog</h4>
                </div>
                <div class="col-12 col-md-6">
                    <div class="float-end">
                        <ul class="list-unstyled d-flex align-items-center mb-0">
                            <li v-for="item, index in store.menuItems" :key="index">
                                <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../styles/general' as *;
@use '../styles/partials/variables' as *;


footer {
    background-color: $primary_color;
}
</style>