import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router.js';

createApp(App).use(router).mount('#app') //ABILITO ALL'UTILIZZO LA VARIABILE router DEL FILE router.js
