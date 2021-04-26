const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    is_actual: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
    ]
}, {timestamps: true});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;