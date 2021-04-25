const Team = require('../models/team');

module.exports.author = async function(req, res){

    try{
        let teams = await Team.find({});

        return res.render('author', {
            teams: teams
        });
    }catch(err){
        console.log(err);
        return res.json(500, {
            message: 'Error in author code'
        });
    }
}