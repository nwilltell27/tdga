const Disc = require('../models/disc');

module.exports = {
  index,
  new: newDisc,
  create,
};

function index(req, res) {
  Disc.find({}, function(err, discs) {
    res.render('discs/index', {
      discs
    });
  });
}

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