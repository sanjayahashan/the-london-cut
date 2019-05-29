var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

var orderSchema = new Schema({
    orderNo: {
        type: String,
        required: true
    },
    orderDes: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerAdd: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    placedDate: {
        type: Date,
        required: true
    },
    completedDate: {
        type: Date,
        required: true
    },
    paymentInfo: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },

    
});

const Order = module.exports = mongoose.model('Order', orderSchema);