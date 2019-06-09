var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var timestamps = require('mongoose-timestamp');

mongoose.set('useFindAndModify', false);

var requestSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    quantity: {
        type: number,
        required: true
    }

});

requestSchema.plugin(timestamps);

const Request = module.exports = mongoose.model('Request', requestSchema);