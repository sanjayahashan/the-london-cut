var express = require('express');
var router = express.Router();
var multer  = require('multer')
var path = require('path');
const crypto = require('crypto-random-string');

const Item = require('../models/item');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
    filename: function(req, file, cb) {
        cb(null, crypto({length:16}) + path.extname(file.originalname))
        
    }
});

var upload = multer({ storage: storage });

router.get('/', function(req, res, next) {
    Item.find(function(err, items) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(items);
        }
    });
});

router.get('/:id', function(req, res, next) {
    Item.findById(req.params.id, function(err, item) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(item);
        }
    });
});

router.post('/', upload.single('image'), function(req, res, next) {
    let newitem = new Item ({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        type: req.body.type,
        suit_category: req.body.suit_category,
        color: req.body.color,
        image: req.file.path
    });

    newitem.save((err, item)=> {
        if(err) {
            res.json(err);
        }
        else {
            res.json({
                msg: 'Item has been added to the DB',
                'img-url': req.file.path
            });
        }
    });

});

router.put('/:id', function(req, res, next) {
    Item.findByIdAndUpdate((req.params.id), {
        $set: {
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            type: req.body.type,
            suit_category: req.body.suit_category,
            color: req.body.color,
            customer: req.body.customer
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