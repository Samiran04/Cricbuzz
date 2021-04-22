const Player = require('../models/player');
const Stats = require('../models/stats');

module.exports.createStats = async function(req, res){
    try{
        let player = await Player.findById(req.body.Id);

        let stats = await Stats.findOne({player: player._id, name: req.body.name});

        if(!stats)
        {
            stats = await Stats.create({
                player: player._id,
                name: req.body.name,
                matches: req.body.matches,
                innings: req.body.innings,
                runs: req.body.runs,
                balls: req.body.balls,
                highest: req.body.highest,
                sr: req.body.sr,
                notout: req.body.notout,
                fours: req.body.fours,
                sixes: req.body.sixes,
                ducks: req.body.ducks,
                fifties: req.body.fifties,
                hundreds: req.body.hundreds,
                doublehundreds: req.body.doublehundreds,
                triplehundreds: req.body.triplehundreds,
                fourhundreds: req.body.fourhundreds,
                average: 0
            })

            if(req.body.name == 'Odi')
            {
                player.odi = stats._id;
            }
            else if(req.body.name == 'Test')
            {
                player.test = stats._id;
            }
            else{
                player.t20 = stats._id;
            }

            let actualInnings = stats.innings - stats.notout;

            stats.average = stats.runs / actualInnings;

            stats.save();

            player.save();

            return res.redirect('back');
        }
    }
    catch(err){
        console.log(err);
        return res.json(500, {
            message: 'Error in Code stats'
        });
    }
}

module.exports.destroyStats = async function(req, res){
    try{
        let stats = await Stats.findByIdAndRemove(req.params.Id);

        if(stats.name == "Odi")
        {
            await Player.findByIdAndUpdate(stats.player, {
                $unset: {odi: stats._id}
            });
        }
        else if(stats.name == "Test")
        {
            await Player.findByIdAndUpdate(stats.player, {
                $unset: {test: stats._id}
            });
        }
        else
        {
            await Player.findByIdAndUpdate(stats.player, {
                $unset: {t20: stats._id}
            });
        }

        return res.redirect('back');
    }catch(err){
        console.log(err);
        return res.json(500, {
            message: 'Error in Code stats'
        });
    }
}

module.exports.statsPage = async function(req, res){
    try{

        let player = await Player.findById(req.params.Id).populate('t20').populate('odi').populate('test');

        return res.render('stats', {
            Id: req.params.Id,
            odi: player.odi,
            test: player.test,
            t20: player.t20
        })
    }catch(err){
        console.log(err);
        return res.json(500, {
            message: 'Error in Code stats'
        });
    }
}