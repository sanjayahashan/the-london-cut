var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

var employeeSchema = new Schema({
    empId: {
        type: String,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    empAdd: {
        type: String,
        required: true
    },
    empContact: {
        type: String,
        required: true
    },
    empGender: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },

    
});

const Employee = module.exports = mongoose.model('Employee', employeeSchema);