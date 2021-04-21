const Disc = require('../models/disc');

module.exports = {
    new: newDisc,
    create,
};

function newDisc(req, res) {
    res.render('discs/new');
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  Disc.create(req.body, function (err, disc) {
    if (err) return res.redirect('/discs/new');
    res.redirect('/discs');
  });
}