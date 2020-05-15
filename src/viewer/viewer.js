var Vue = require('vue/dist/vue.min');
import io from 'socket.io-client';

var socket = io();
socket.on('present', function (msg) {
    console.log(msg);
    app.msg = msg;
});

var app = new Vue({
    el: '#app',
    data: () => ({
        msg: {}
    })
})
