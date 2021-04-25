const express = require('express');
const router = express.Router();

const match_controller = require('../controllers/match_controller');

router.post('/select-players', match_controller.selectPlayers);
router.post('/get-players', match_controller.getPlayers);

module.exports = router;