const Disc = require('../models/disc');

module.exports = {
  index,
  new: newDisc,
  create,
  show,
  edit,
  update,
};

function index(req, res) {
  Disc.find({}, function(err, discs) {
    res.render('discs/index', {
      title: 'All Discs',
      discs
    });
  });
}

function newDisc(req, res) {
  res.render('discs/new', {
    title: 'Add a Disc'
  });
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

function show(req, res) {
  Disc.findById(req.params.id, function(err, disc) {
    res.render('discs/show', { 
      title: disc.title, 
      disc 
    });
  });
}

function edit(req, res) {
  Disc.findById(req.params.id, function(err, disc) {
    res.render('discs/edit', {
      title: 'Edit Disc Details',
      disc
    });
  });
}

function update(req, res) {
  Disc.findByIdAndUpdate(req.params.id, req.body, function(err) {
    res.redirect('/discs');
  });
}