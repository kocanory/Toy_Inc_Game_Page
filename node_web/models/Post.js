const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userID:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    body:{
        type:String,
        required: true,
    },
    createdDate:{
        default:Date.now()
    }
})

module.exports = mongoose.model("Post", postSchema);