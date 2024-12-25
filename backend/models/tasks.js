const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timer: {
        type: Number, 
        required: true,
        default: 60
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);