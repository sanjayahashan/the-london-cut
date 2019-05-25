var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var timestamps = require('mongoose-timestamp');

mongoose.set('useFindAndModify', false);

var incomeSchema = new Schema({
    item: ObjectId,
    amount: Number,
});

incomeSchema.plugin(timestamps);
const Income = module.exports = mongoose.model('Income', incomeSchema);