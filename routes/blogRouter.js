const express = require('express')
const { newPost, allBlogPosts, oneBlogPost, updateblog, deleteBlog} = require('../controllers/blogController')


const router = express.Router()

router.post('/newblog', newPost)
router.get("/getall", allBlogPosts)
router.get('/getone/:id', oneBlogPost)
router.put('/update/:id', updateblog)
router.delete("/delete/:id", deleteBlog)


module.exports = router