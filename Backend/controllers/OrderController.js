var express = require('express');
var router = express.Router();

const Order = require('../models/order');

router.get('/', function(req, res, next) {
    Order.find(function(err, orders) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(orders);
        }
    });
});

router.get('/:id', function(req, res, next) {
    Order.findById(req.params.id, function(err, order) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(order);
        }
    });
});

router.post('/', (req, res, next)=>{
    let neworder = new Order ({
        orderNo: req.body.orderNo,
        orderDes: req.body.orderDes,
        customerName: req.body.customerName,
        customerAdd: req.body.customerAdd,
        contactNo: req.body.contactNo,
        placedDate: req.body.placedDate,
        completedDate: req.body.completedDate,
        paymentInfo:req.body.paymentInfo,
        amount:req.body.amount,
    });

    neworder.save((err, order)=> {
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Order has been added to the DB'});
        }
    });

});

router.put('/:id', function(req, res, next) {
    Order.findByIdAndUpdate((req.params.id), {
        $set: {
            orderNo: req.body.orderNo,
            orderDes: req.body.orderDes,
            customerName: req.body.customerName,
            customerAdd: req.body.customerAdd,
            contactNo: req.body.contactNo,
            placedDate: req.body.placedDate,
            completedDate: req.body.completedDate,
            paymentInfo:req.body.paymentInfo,
            amount:req.body.amount,
        }
    },
        {new: true},
        function(err, result) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        }
    );
});

router.delete('/:id', function(req, res, next) {
    Order.remove({_id:req.params.id}, function(err, order) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(order);
        }
    });
});

router.get('/test', function(req, res, next) {
    res.send("Hello World");
});

module.exports = router;