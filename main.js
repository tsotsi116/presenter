let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static('src/static'));

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('present', msg => {
        // console.log('message: ' + msg);
        io.emit('present', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(3000, () => {
    console.log('Listening on 3000')
});
