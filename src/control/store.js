import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        queue: [],
    },
    mutations: {
        addToQueue: (state, payload) => {
            payload.id = state.queue.length;
            state.queue.push(payload)
        },
    },
    actions: {}
});
