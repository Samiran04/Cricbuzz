const express = require('express');
const router = express.Router();

const player_controller = require('../controllers/player_controller');

router.post('/enter-data', player_controller.enterData);
router.post('/search-player', player_controller.searchPlayer);

module.exports = router;