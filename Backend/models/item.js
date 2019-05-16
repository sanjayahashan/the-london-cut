var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

var itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    quantity: {
        type:Number,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    type: {
        type:String,
        required: true
    },
    suit_category: {
        type:String
    },
    colors: String,
    customer: {
        name: {
            type: String,
            default: ''
        },
        nic: {
            type: String,
            default: ''
        },
        tel: {
            type: String,
            default: ''
        },
        date_took: {
            type: Date,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        advanced: {
            type: String,
            default: ''
        },
    }
});

const Item = module.exports = mongoose.model('Item', itemSchema);