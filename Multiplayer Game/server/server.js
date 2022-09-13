const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://localhost:8080'],
    },
});

io.on('connection', socket => {
    console.log(`socket id: ${socket.id}`);

    // When receive a event from client
    socket.on("custom-event", (number, string, object) => {
        console.log(number, string, object);
    });

});