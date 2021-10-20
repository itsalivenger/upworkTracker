let mongoose = require('mongoose');

let JobSchema = mongoose.Schema({
    markedWith: String,
    data: Object
}, { timeStamps: true });

let Job = mongoose.model('Job', JobSchema);
module.exports = Job;