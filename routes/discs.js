const express = require('express');
const router = express.Router();
const discsCtrl = require('../controllers/discs');

router.get('/', discsCtrl.index);
router.get('/new', discsCtrl.new);
router.post('/', discsCtrl.create);
router.get('/:id', discsCtrl.show);
router.get('/:id/edit', discsCtrl.edit);
router.put('/:id', discsCtrl.update);
router.delete('/:id', discsCtrl.delete);

module.exports = router;