const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    name: {
        type: String,
        required: true
    },
    matches: {
        type: Number,
        required: true
    },
    innings: {
        type: Number,
        required: true
    },
    runs: {
        type: Number,
        required: true
    },
    balls: {
        type: Number,
        required: true
    },
    highest: {
        type: Number,
        required: true
    },
    average: {
        type: Number
    },
    sr: {
        type: Number,
        required: true
    },
    notout: {
        type: Number,
        required: true
    },
    fours: {
        type: Number,
        required: true
    },
    sixes: {
        type: Number,
        required: true
    },
    ducks: {
        type: Number,
        required: true
    },
    fifties: {
        type: Number
    },
    hundreds: {
        type: Number
    },
    doublehundreds: {
        type: Number
    },
    triplehundreds: {
        type: Number
    },
    fourhundreds: {
        type: Number
    }
}, {timestamps: true});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;