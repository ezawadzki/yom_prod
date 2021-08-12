import '@babel/polyfill';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/firebase/';

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}
