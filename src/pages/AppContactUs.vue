<script>
import AppContactForm from '../components/AppContactForm.vue';
export default {
    name: 'AppContactUs',
    components: {
        AppContactForm
    }
}
</script>
<template lang="">
    <div class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="my-5 text-center">
                        Contatti
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis facilisis gravida. Duis eget suscipit quam. Proin non finibus nisi. Ut in fermentum odio. Sed sed nulla risus. Praesent in convallis nulla, vel euismod nunc. Praesent condimentum libero vitae odio euismod, a malesuada lectus convallis.
                    </p>
                </div>
                <div class="col-12 mb-5">
                    <div class="row">
                        <div class="col-12 text-center">
                            <p><strong>Indirizzo:</strong> Indirizzo</p>
                            <p><strong>Città: </strong>Città</p>
                            <p><strong>Telefono:</strong> Telefono</p>
                            <p><strong>Email: </strong> Email</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <AppContactForm />
                </div>
            </div>
        </div>
        <div class="mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1854.2810065407548!2d13.246646727967274!3d41.29012812745157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325236a23b06245%3A0x659a338f1de1164c!2sVia%20Goffredo%20Mameli%2C%205%2C%2004019%20Terracina%20LT!5e0!3m2!1sit!2sit!4v1711710066909!5m2!1sit!2sit" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>
<style lang="scss" scoped>
iframe {
    width: 100%;
}
</style>