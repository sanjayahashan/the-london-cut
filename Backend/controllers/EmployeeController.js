var express = require('express');
var router = express.Router();

const Employee = require('../models/employee');

router.get('/', function(req, res, next) {
    Employee.find(function(err, employees) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(employees);
        }
    });
});

router.get('/:id', function(req, res, next) {
    Employee.findById(req.params.id, function(err, employee) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(employee);
        }
    });
});

router.post('/', (req, res, next)=>{
    let newemployee = new Employee ({
        empId: req.body.empId,
        empName: req.body.empName,
        empAdd: req.body.empAdd,
        empContact: req.body.empContact,
        empGender: req.body.empGender,
        startDate: req.body.startDate,
    });

    newemployee.save((err, employee)=> {
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Employee has been added to the DB'});
        }
    });

});

router.put('/:id', function(req, res, next) {
    Employee.findByIdAndUpdate((req.params.id), {
        $set: {
        empId: req.body.empId,
        empName: req.body.empName,
        empAdd: req.body.empAdd,
        empContact: req.body.empContact,
        empGender: req.body.empGender,
        startDate: req.body.startDate,
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
    Employee.remove({_id:req.params.id}, function(err, employee) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(employee);
        }
    });
});

router.get('/test', function(req, res, next) {
    res.send("Hello World");
});

module.exports = router;