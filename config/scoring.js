const { request } = require('express');
const { Socket } = require('socket.io');
const Match = require('../models/match');
const Stats = require('../models/stats');
const Player = require('../models/player');

module.exports.chatSockets = function(socketServer){
    let io = require('socket.io')(socketServer);

    io.sockets.on('connection', function(socket){
        console.log('new connection received', socket.id);

        socket.on('disconnect', function(){
            console.log('socket disconnected!');
        });

        socket.on('join_room', function(data){
            socket.join(data.roomName);
        });

        socket.on('scoring', function(data) {
            console.log(data);
        })        
    });
}