<script>
export default {
    name: 'AppLoader'
}
</script>
<template lang="">
    <div class="centered-loader">
        <span class="loader"></span>
    </div>
</template>
<style lang="scss" scoped>
.centered-loader {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #001632;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    background: #FFF;
    box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    box-sizing: border-box;
    animation: shadowPulse 2s linear infinite;
}

@keyframes shadowPulse {
    33% {
        background: #FFF;
        box-shadow: -24px 0 #006eff, 24px 0 #FFF;
    }

    66% {
        background: #006eff;
        box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    }

    100% {
        background: #FFF;
        box-shadow: -24px 0 #FFF, 24px 0 #006eff;
    }
}
</style>