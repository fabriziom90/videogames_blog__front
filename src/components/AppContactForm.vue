<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'AppContactForm',
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: '',
            errors: '',
            // success: false,
            loading: false
        }
    },
    methods: {
        sendForm() {
            this.loading = true;

            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            //MI DEFINISCO UN OGGETTo CONTENENTE I MESSAGGI DI ERRORE
            this.errors = {}

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if (response.data.success) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.content = '';

                    // this.success = true;

                    this.$router.push({
                        name: 'thank-you'
                    })
                }
                else {
                    this.errors = response.data.errors;
                }

                this.loading = false;
            });
        }
    }
}
</script>
<template lang="">
    <div>
        <!-- <div class="row" v-if="success">
            <div class="col-12">
                <div class="alert alert-success">
                    Email inviata con successo
                </div>
            </div>
        </div> -->
        <form @submit.prevent="sendForm()" method="POST">
            <div class="row">
                <div class="col-6">
                    <label for="name" class="control-label">Nome</label>
                    <input type="text" placeholder="Nome" id="name" name="name" class="form-control" :class="errors.name ? 'is-invalid' : ''" v-model="name">
                    <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                        {{ error }}
                    </p>
                </div>
                <div class="col-6">
                    <label for="surname" class="control-label">Cognome</label>
                    <input type="text" placeholder="Cognome" id="surname" name="surname" class="form-control" :class="errors.surname ? 'is-invalid' : ''" v-model="surname">
                    <p v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-danger">
                        {{ error }}
                    </p>
                </div>
                <div class="col-6">
                    <label for="email" class="control-label">Email</label>
                    <input type="text" placeholder="Email" id="email" name="email" class="form-control" :class="errors.email ? 'is-invalid' : ''" v-model="email">
                    <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
                        {{ error }}
                    </p>
                </div>
                <div class="col-6">
                    <label for="phone" class="control-label">Telefono</label>
                    <input type="text" placeholder="Nome" class="form-control" id="phone" name="phone" :class="errors.phone ? 'is-invalid' : ''" v-model="phone">
                    <p v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="text-danger">
                        {{ error }}
                    </p>
                </div>
                <div class="col-12 mt-3">
                    <label for="content" class="control-label">Messaggio</label>
                    <textarea name="content" id="content" cols="30" rows="10" class="form-control" :class="errors.content ? 'is-invalid' : ''" v-model="content" placeholder="Messaggio"></textarea>
                    <p v-for="(error, index) in errors.content" :key="`message-error-${index}`" class="text-danger">
                        {{ error }}
                    </p>
                </div>
                <div class="col-12 mt-4">
                    <button class="primary-button" :disabled="loading" type="submit">{{ loading ? 'Invio in corso...' : 'Invia'}}</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="">
    
</style>