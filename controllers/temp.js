const Team = require('../models/team');
const Player = require('../models/player');
const Match = require('../models/match');
const Stats = require('../models/stats');

module.exports.temp = async function(req, res){

    await Player.findByIdAndDelete('6086d06925f04a049449bbf0');

    return;
}