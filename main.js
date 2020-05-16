let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let sqlite3 = require('sqlite3').verbose();

var songs = new sqlite3.Database('databases/songs/songs.sqlite');

app.use(express.static('src/static'));

app.get('/songs', (req, res) => {
    songs.all("SELECT DISTINCT id,title, lyrics FROM songs", (err, row) => {
        if (err) {
            return [];
        }
        res.send(row);
    });
});

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('present', msg => {
        io.emit('present', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


http.listen(3000, () => {
    console.log('Listening on 3000')
});
