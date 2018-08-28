const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Task = require('./task');

const labelSchema = new Schema({
    label: {
        type: String,
        required: [true,'Label name is required.']
    },
    tasks:[String]
    
});

const Label = mongoose.model('label',labelSchema);
module.exports = Label;