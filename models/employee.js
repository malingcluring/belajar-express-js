// Load mongoose since we need it to define a model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
EmpSchema = new Schema({
    name: String,
    salary: Number,
    age: Number
});

module.exports = mongoose.model('Employee', EmpSchema);