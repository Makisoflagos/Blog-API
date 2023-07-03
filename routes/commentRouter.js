const express = require('express')
const { newComment, getallComments, getOneComment, updateComment, deleteComment } = require('../controllers/commentController')


const router = express.Router()

router.post('/newcomment/:id', newComment)
router.get('/all', getallComments)
router. get('/one/:id', getOneComment)
router.put('/updated/:id', updateComment)
router.delete('/deleted/:id', deleteComment)

module.exports = router