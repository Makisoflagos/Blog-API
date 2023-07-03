const commentModel = require("../model/commentModel")
const blogModel = require("../model/blogModel")

const newComment = async (req, res) => {
    try{
        const blog = await blogModel.findById(req.params.id)
        const postComments = await new commentModel(req.body)
        postComments.posts = blog
        await postComments.save();
        blog.comment.push(postComments)
        await blog.save();
        res.status(201).json({
            message: "Comment added successfully",
            data: blog
        })

    }catch(error){
        res.status(400).json({
            message: 'Failed to post Comment',
            error: error.message
        })
    }
}

// get all comments

const getallComments = async (req, res) => {
    try{
        const allComments = await commentModel.find();
        res.status(200).json({
            message: `These are all available comments on this blog ${allComments.length}`,
            data: allComments
        })

    }catch(error){
        res.status(404).json({
            message: "No available comments",
            error: error.message
        })
    }
}

// find one comment

const getOneComment = async (req, res) => {
    try{
        const id = req.params.id;
        const oneComment = await commentModel.findById(id)
        res.status(200).json({
            message: `The comment with this id ${id} is available`,
            data: oneComment
        })
    }catch(e){
        res.status(404).json({
            message: 'comment  with id not found',
            error: e.message
        })
    }
}

// update a comment

const updateComment = async (req, res) => {
    try{
        const { id } = req.params
        const updatedComment = await commentModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({
            message: 'Updated successfully',
            data: updatedComment
        })
    }catch(e){
        res.status(500).json({
            message: 'comment has not been updated successfully',
            error: e.message
        })
    }
}

// delete a comment

const deleteComment = async (req, res) => {
    try{
        const { id } = req.params
        const deletedComment = await commentModel.findByIdAndDelete(id, req.body, {new: true})
        res.status(200).json({
            message: 'deleted successfully',
            data: deletedComment
        })
    }catch(e){
        res.status(500).json({
            message: 'comment was not deleted successfully',
            error: e.message
        })
    }
}

module.exports = {
    newComment,
    getallComments,
    getOneComment,
    updateComment,
    deleteComment
}