const Match = require('../models/match');
const Team = require('../models/team');

module.exports.getPlayers = async function(req, res){
    try{
        
        let team1 = await Team.create({is_actual: false, name: req.body.name1, players: req.body.team1});
        let team2 = await Team.create({is_actual: false, name: req.body.name2, players: req.body.team2});

        let match_name = req.body.name1 + req.body.name2 + new Date().toString();

        let match = await Match.create({
            date: new Date(),
            name: match_name,
            team1: team1,
            team2: team2,
            score1: 0,
            score2: 0,
            wkts1: 0,
            wkts2: 0,
            batting1: [],
            batting2: [],
            bowling1: [],
            bowling2: []
        });

        console.log(match);

        return res.redirect('back');
    }catch(err)
    {
        console.log(err);
        return res.json(500, {
            message: 'Error in match code'
        });
    }
}

module.exports.selectPlayers = async function(req, res)
{
    try{

        let team1 = await Team.findOne({name: req.body.name1}).populate('players');
        let team2 = await Team.findOne({name: req.body.name2}).populate('players');

        return res.render('select_team',{
            team1: team1,
            team2: team2
        });
    }catch(err)
    {
        console.log(err);
        return res.json(500, {
            message: 'Error in match code'
        });
    }
}