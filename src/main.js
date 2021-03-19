import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/green'},
  { path: '/:color', component: HomePage }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
