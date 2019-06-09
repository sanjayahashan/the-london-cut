var express = require('express');
var router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);

router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.use('/items', require('../controllers/ItemController'));
router.use('/income', require('../controllers/IncomeController'));
router.use('/orders', require('../controllers/OrderController'));
router.use('/employees',require('../controllers/EmployeeController'));
router.use('/appointment', require('../controllers/AppointmentController'));


module.exports = router