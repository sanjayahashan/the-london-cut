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
    }
});

const Item = module.exports = mongoose.model('Item', itemSchema);