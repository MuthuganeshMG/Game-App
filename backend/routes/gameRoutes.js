const express = require('express');
const router = express.Router();
const { createLevel, getLevel } = require('../controllers/gameController');


router.post('/', createLevel);
router.get('/get', getLevel);

module.exports = router;