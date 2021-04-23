const Team = require('../models/team');
const Player = require('../models/player');

module.exports.createTeam = async function(req, res){
    try{
        let team = await Team.create({
            name: req.body.name,
            players: []
        });

        return res.redirect('back');
    }catch(err){
        console.log(err);

        return res.json(500, {
            message: 'Error in Team code'
        });
    }
}

module.exports.temp = function(req, res){
    Player.findByIdAndUpdate(req.body.player, {
        $set: {team: req.body.name}
    }, function(err, player){
        if(err)
        {
            console.log(err);
            return;
        }

        return res.redirect('back');
    })
}