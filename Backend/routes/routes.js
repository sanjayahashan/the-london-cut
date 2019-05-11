var express = require('express');
var router = express.Router();

const Item = require('../models/item');
const url = "/items"

router.get(url, function(req, res, next) {
    Item.find(function(err, items) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(items);
        }
    });
});

router.get(url + '/:id', function(req, res, next) {
    Item.findById(req.params.id, function(err, item) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(item);
        }
    });
});

router.post(url, (req, res, next)=>{
    let newitem = new Item ({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        type: req.body.type,
        suit_category: req.body.suit_category
    });

    newitem.save((err, item)=> {
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Item has been added to the DB'});
        }
    });

});

router.put(url +'/:id', function(req, res, next) {
    Item.findByIdAndUpdate((req.params.id), {
        $set: {
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            type: req.body.type,
            suit_category: req.body.suit_category
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

router.delete(url + '/:id', function(req, res, next) {
    Item.remove({_id:req.params.id}, function(err, item) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(item);
        }
    });
});

router.get('/test', function(req, res, next) {
    res.send("Hello World");
});

module.exports = router;