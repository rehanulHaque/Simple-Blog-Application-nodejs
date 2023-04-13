const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // owner: {
    //     type: String,
    //     required: true
    // }
})
const model = mongoose.model('Blog', blogSchema)
module.exports = model