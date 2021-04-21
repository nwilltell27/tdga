module.exports = {
    index, 
};

function index(req, res) {
    res.render('index', { title: 'Terrible Disc Golf Association' });
}