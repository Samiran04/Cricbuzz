const express = require('express');
const router = express.Router();

const stats_controller = require('../controllers/stats_controller');

router.get('/:Id', stats_controller.statsPage);
router.post('/create-stats', stats_controller.createStats);
router.get('/destroy-stats/:Id', stats_controller.destroyStats);

module.exports = router;