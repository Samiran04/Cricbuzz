const express = require('express');
const router = express.Router();

const author_controller = require('../controllers/author_controller');

router.get('/', author_controller.author);

module.exports = router;