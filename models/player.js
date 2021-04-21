const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    born: {
        type: Date,
        required: true
    },
    birthplace: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    battingstyle: {
        type: String,
        required: true
    },
    bowlingstyle: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    t20: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stats'
    },
    odi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stats'
    },
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stats'
    }
}, {timestamps: true});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;