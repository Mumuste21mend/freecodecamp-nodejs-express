const mongoose = require("mongoose")
const Taskschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name"],
        trim: true,
        maxlength: [20, "name is too long "]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', Taskschema)