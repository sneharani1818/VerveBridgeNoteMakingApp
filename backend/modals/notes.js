const mongoose = require("mongoose");
const notesSchema = mongoose.Schema({
    label:{
        type: String,
    },
    description:{
        type: String, 
        required: true,
    },
    email:{
        type: String, 
        required: true,
    }
  

},{ timestamps: true })
const notesModel = mongoose.model('note', notesSchema);
module.exports = notesModel;