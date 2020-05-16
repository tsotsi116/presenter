import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiUrl: 'http://localhost:3000/',
        queue: [],
        songs:[],
    },
    mutations: {
        addToQueue: (state, payload) => {
            payload.id = state.queue.length;
            state.queue.push(payload)
        },
        addToSongs: (state, payload) => {
            state.songs = payload;
        }
    },
    actions: {}
});
