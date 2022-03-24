import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import "bootstrap/dist/js/bootstrap.min.js"

createApp(App).use(store).use(router).mount('#app')
