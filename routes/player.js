const express = require('express');
const router = express.Router();

const player_controller = require('../controllers/player_controller');

router.post('/enter-data', player_controller.enterData);

module.exports = router;