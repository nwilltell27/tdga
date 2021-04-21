

module.exports = {
    new: newDisc,
};

function newDisc(req, res) {
    res.render('discs/new');
}