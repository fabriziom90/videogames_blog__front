<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<template lang="">
  <div>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>
<style lang="scss">
@use './styles/general.scss';
</style>
