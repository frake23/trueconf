import Vue from 'vue';
import Vuex from 'vuex';

import trafficLight from "@/store/modules/trafficLight";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        trafficLight
    }
})
