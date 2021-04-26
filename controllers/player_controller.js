const Player = require('../models/player');
const Team = require('../models/team');

module.exports.enterData = async function(req, res){
    try{

        let player = await Player.create({
            name: req.body.name,
            born: req.body.born,
            team: req.body.team,
            birthplace: req.body.birthplace,
            nickname: req.body.nickname,
            role: req.body.role,
            battingstyle: req.body.battingstyle,
            bowlingstyle: req.body.bowlingstyle
        });

        await Team.findOneAndUpdate({name: req.body.team}, {
            $push: {players: player._id}
        });

        return res.redirect('back');
    }catch(err){
        console.log(err);

        return res.json(500, {
            message: 'Error in code'
        });
    }
}

module.exports.searchPlayer = async function(req, res){
    try{
        let players = await Player.find({name: req.body.name});
        let teams = await Team.find({});

        res.locals.players = players;
        res.locals.teams = teams;

        return res.render('author');
    }catch(err)
    {
        console.log(err);
        return res.json(500, {
            message: 'Error in Search player code'
        });
    }
}