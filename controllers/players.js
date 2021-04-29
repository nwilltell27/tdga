const Player = require('../models/player');

module.exports = {
    new: newPlayer,
}

function newPlayer(req, res) {
    res.render('players/new', {
        title: 'Add a Player'
    });
}