const Player = require('../models/player');

module.exports.enterData = async function(req, res){
    try{

        let player = Player.create({
            name: req.body.name,
            born: req.body.born,
            birthplace: req.body.birthplace,
            nickname: req.body.nickname,
            role: req.body.role,
            battingstyle: req.body.battingstyle,
            bowlingstyle: req.body.bowlingstyle
        });

        return res.redirect('back');
    }catch(err){
        console.log(err);

        return res.json(500, {
            message: 'Error in code'
        });
    }
}