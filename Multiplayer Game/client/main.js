import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

// When connect with server
socket.on('connect', () => {
    document.write(`<h1>Your are connected to ${socket.id}</h1>`);
});

// Send an event to server
socket.emit('custom-event', 10, 'Hi', { a: 'a' });