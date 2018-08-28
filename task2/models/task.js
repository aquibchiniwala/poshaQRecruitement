const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {
        type: String,
        required: [true,'task name is required.']
    },
    labelID: {
        type: String,
        required: [true,'Label ID is required.']
    }
});

const Task = mongoose.model('task',taskSchema);
module.exports = Task;