var express = require('express');
var router = express.Router();

const Income = require('../models/income');

router.get('/', function(req, res, next) {
    Income.find(function(err, incomeEntires) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(incomeEntires);
        }
    });
});

router.post('/', function(req, res, next) {
    let newIncome = new Income ({
        item: req.body.item,
        amount: req.body.amount
    });

    newIncome.save(function(err) {
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'income saved'});
        }
    });
});

module.exports = router;