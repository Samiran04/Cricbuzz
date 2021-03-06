const mongoose = require('mongoose');
const matchSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    team1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    team2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    score1: {
        type: Number
    },
    score2: {
        type: Number
    },
    wkts1: {
        type: Number
    },
    wkts2: {
        type: Number
    },
    batting1: [
        {
            name: {
                type: String
            },
            R: {
                type: Number
            },
            B: {
                type: Number
            },
            S: {
                type: Number
            },
            F: {
                type: Number
            }
        }
    ],
    batting2: [
        {
            name: {
                type: String
            },
            R: {
                type: Number
            },
            B: {
                type: Number
            },
            S: {
                type: Number
            },
            F: {
                type: Number
            }
        }
    ],
    bowling1: [
        {
            name: {
                type: String
            },
            R: {
                type: Number
            },
            B: {
                type: Number
            },
            W: {
                type: Number
            }
        }
    ],
    bowling2: [
        {
            name: {
                type: String
            },
            R: {
                type: Number
            },
            B: {
                type: Number
            },
            W: {
                type: Number
            }
        }
    ]
}, {timestamps: true});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;