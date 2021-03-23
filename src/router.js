import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage";

Vue.use(VueRouter)

const routes = [
    { path: '/:lightType', component: HomePage }
];

export default new VueRouter({
    mode: 'history',
    routes
})