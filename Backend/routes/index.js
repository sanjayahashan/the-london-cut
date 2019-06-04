var express = require('express');
var router = express.Router();

router.use('/items', require('../controllers/ItemController'));
router.use('/income', require('../controllers/IncomeController'));
router.use('/orders', require('../controllers/OrderController'));

module.exports = router