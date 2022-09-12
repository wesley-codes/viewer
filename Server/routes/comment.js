const { verifyToken } = require("../verifyToken")
const {createComment, deleteComment, getComments} = require("../controllers/comment")
const router = require("express").Router()


//CREATE COMMENT
router.post("/",verifyToken, createComment)

//DELETE COMMENT
router.delete("/:id",verifyToken, deleteComment)


//GET COMMENT OF PARTICULAR VIDEO
router.get("/:videoId", getComments)







module.exports = router