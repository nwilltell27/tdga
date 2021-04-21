const express = require('express');
const router = express.Router();
const discsCtrl = require('../controllers/discs');

router.get('/new', discsCtrl.new);
router.post('/', discsCtrl.create);
router.get('/', discsCtrl.index);

module.exports = router;