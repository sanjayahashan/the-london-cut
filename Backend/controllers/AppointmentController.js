var express = require('express');
var router = express.Router();

const App = require('../models/appointment');

router.post('/', (req, res, next)=>{
    let newapp = new App ({
        name: req.body.name,
        contactNo: req.body.contactNo,
        date: req.body.date,
        time: req.body.time,
        
    });

    newapp.save((err, app)=> {
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Appointment has been added to the DB'});
        }
    });

});

router.get('/', function(req, res, next) {
    App.find(function(err, items) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(items);
        }
    });
}); 
   
router.get('/id', function(req, res, next) {
    App.findById(req.params.id, function(err, item) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(item);
        }
    });
});



module.exports = router;