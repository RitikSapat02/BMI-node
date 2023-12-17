const express = require('express');
const router = express.Router();
const calcBMI  = require('../controllers/BMIcontroller');


router.post('/calculateBMI', calcBMI)

module.exports = router;