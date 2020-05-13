import io from 'socket.io-client';

const Presenter = {
    install(Vue, Options) {
        let socket = io();
        Vue.prototype.$present = (stuff) => {
          socket.emit('present', stuff);
        }
    }
};

export default Presenter;
