var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

var appSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contactNo: {
        type:Number,
        required: true
    },
    date: {
        type:Date,
        required: true
    },
    time: {
        type:String,
        required: true
    }
    
});

const App = module.exports = mongoose.model('App', appSchema);