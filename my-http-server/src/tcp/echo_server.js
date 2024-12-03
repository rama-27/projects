"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
function newConn(socket) {
    console.log('new connection', socket.remoteAddress, socket.remotePort);
    server.on('end', function () {
        console.log('EOF.');
    });
    socket.on('data', function (data) {
        console.log('data', data);
        socket.write(data);
        if (data.includes('q')) {
            console.log('closing');
            socket.end();
        }
    });
}
var server = net.createServer();
server.on('error', function (err) { throw err; });
server.on('connection', newConn);
server.listen({ host: '127.0.0.1', port: 1234 });
