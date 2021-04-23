const express = require('express');
const router = express.Router();

const team_controller = require('../controllers/team_controller');

router.post('/create-team', team_controller.createTeam);
router.post('/temp', team_controller.temp);

module.exports = router;