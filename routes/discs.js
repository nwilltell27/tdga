const express = require('express');
const router = express.Router();
const discsCtrl = require('../controllers/discs');

router.get('/new', discsCtrl.new);
router.post('/', discsCtrl.create);

module.exports = router;