const { createError } = require("../error");
const Comment = require("../models/comment");
const Video = require("../models/video");

//SAVE COMMENT TO DB

const createComment = async (req, res, next) => {
    console.log("===")
  const comment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await comment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  const { id } = req.params;
//console.log(id)
  try {
    const comment = await Comment.findById(req.params.id)
    const video = await Video.findById(id)
    console.log(comment)
    if(req.user.id === comment.userId || req.user.id === video.userId){
        await Comment.findByIdAndDelete(id)
        res.status(200).json("Sucessfully deleted!");
    }else{
        return next(createError(403, "Cannot delete this comment!"))
    }
  } catch (err) {
    next(err);
  }
};


const getComments = async (req, res, next) =>{
    console.log("====")
    const {videoId} = req.params
try{
const comment = await Comment.find({videoId})
res.status(200).json(comment);


}catch(err){

}
}


module.exports = { createComment, deleteComment, getComments };
