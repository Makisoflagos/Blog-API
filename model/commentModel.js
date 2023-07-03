const mongoose = require("mongoose")

const commentModel = new mongoose.Schema({
    postComment: {
        type: String
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogspost"
    }
},{
    timestamps: true
})

const commented = mongoose.model("comments", commentModel)


module.exports = commented;