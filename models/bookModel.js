const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    }, 

    author: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    available: {
        type: Boolean,
        required: true
    }
})

const book = mongoose.model("book", bookSchema)

module.exports = book