const blogModel = require("../model/blogModel")

const newPost = async(req, res) => {
    try{
        const newPosts = await blogModel.create(req.body)
        res.status(201).json({
            message: 'Post created successfully',
            data: newPosts
        })

    }catch(error){
        res.status(400).json({
            message: "Failed to Post blog",
            error: error.message
        })
    }
}

// get all blogpost

const allBlogPosts = async (req, res) => {
    try{
        const allBlogs = await blogModel.find();
        res.status(200).json({
            message: `These are all available blogposts ${allBlogs.length}`,
            data: allBlogs
        })

    }catch(error){
        res.status(404).json({
            message: "No available blogposts",
            error: error.message
        })
    }
}

// find one blog post

const oneBlogPost = async (req, res) => {
    try{
        const id = req.params.id;
        const oneBlog = await blogModel.findById(id).populate("comment")
        res.status(200).json({
            message: `The blog post with this id ${id} is available`,
            data: oneBlog
        })
    }catch(e){
        res.status(404).json({
            message: 'Blog post with id not found',
            error: e.message
        })
    }
}

// update a blog post

const updateblog = async(req, res) => {
    try{
        const { id } = req.params
        const updatedBlog = await blogModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({
            message: "Blog updated successfully",
            data: updatedBlog
        })
    }catch (e){
        res.status(500).json({
            message: 'Blog not updated successfully',
            error: e.message

        })
    }
}

// delete a blog

const deleteBlog = async (req, res) => {
    try{
        const { id } = req.params
        const deletedBlog = await blogModel.findByIdAndDelete(id)
        res.status(200).json({
            message: 'blog deleted successfully',
            data: deletedBlog
        })
    }catch(e){
        res.status(500).json({
            message: "Unable to delete blog",
            error: e.message

        })
    }
}
module.exports = {
    newPost,
    allBlogPosts,
    oneBlogPost,
    updateblog,
    deleteBlog
}