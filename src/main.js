import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate'
import App from './App.vue';
import router from './router';

Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.config.productionTip = false;
const instance = axios.create({
  baseURL: 'http://localhost:7070/api/',
  timeout: 1000,

});

Vue.use(VueAxios, instance);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
