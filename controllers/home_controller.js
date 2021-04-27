const Match = require('../models/match');

module.exports.home = async function(req, res){
    try{

        let matches = await Match.find({});

        return res.render('home',{
            matches: matches
        })
    }
    catch(err){
        console.log(err);
        return res.json(500, {
            message: 'Error in home code'
        });
    }
}
module.exports.scoring = async function(req, res){
    try{

        let match = await Match.findOne({name: req.params.name});

        return res.render('score_card',{
            match : match,
            toss: false,
            bat: false
        });
    }catch(err)
    {
        console.log(err);
        return res.json(500, {
            message: 'Error in home code'
        });
    }
}