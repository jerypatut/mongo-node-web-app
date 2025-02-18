const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
        nama: {
            type: String,
            required: [true,'must provide a name'],
            trim:true,
            maxlength:[20,'name can not more than 20 characters']
        },
        completed: {
            type: Boolean,
            default: false
        }

})

module.exports = mongoose.model('Task', TaskSchema);