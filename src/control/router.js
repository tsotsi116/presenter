import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import Songs from "./views/Songs.vue";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/songs',
            name: 'songs',
            component: Songs
        }
    ]
})
