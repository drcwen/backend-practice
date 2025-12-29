
const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myUser",
        required: true
    },
    title: String,
    content: String
})

module.exports = mongoose.model('myNotes', notesSchema)