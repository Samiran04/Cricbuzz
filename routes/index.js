const express = require('express');
const router = express.Router();

router.use('/author', require('./author'));
router.use('/player', require('./player'));
router.use('/stats', require('./stats'));

module.exports = router;