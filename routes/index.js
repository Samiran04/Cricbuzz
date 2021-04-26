const express = require('express');
const router = express.Router();

const temp_controller = require('../controllers/temp');

router.use('/author', require('./author'));
router.use('/player', require('./player'));
router.use('/stats', require('./stats'));
router.use('/team', require('./team'));
router.use('/match', require('./match'));

module.exports = router;