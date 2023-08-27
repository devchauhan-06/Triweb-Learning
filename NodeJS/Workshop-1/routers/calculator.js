const express = require('express');
const calculatorController = require('../controllers/calculator')
const router = express.Router();


// /calculator/add
router.post('/add',calculatorController.add)

// /calculator/subtract
router.post('/subtract',calculatorController.subtract)

// /calculator/multiply
router.post('/multiply',calculatorController.multiply)

// /calculator/divide
router.post('/divide',calculatorController.divide)

module.exports = router