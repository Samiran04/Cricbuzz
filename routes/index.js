const express = require('express');
const router = express.Router();

router.use('/author', require('./author'));
router.use('/player', require('./player'));

module.exports = router;