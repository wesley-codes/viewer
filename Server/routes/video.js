const { verifyToken } = require("../verifyToken");
const {
  createVideo,
  updateVideo,
  deleteVideo,
  getAVideo,
  addView,
  trendingVideos,
  randomVideos,
  getSubscribers,
  getVideosByTags,
  getVideosBySearch,
  likeVideo,
  dislikeVideo,
} = require("../controllers/video");
const router = require("express").Router();
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
  destination: "./upload",
  filename :function(req, file , cb){
    cb(null , "viewer" +  Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage:storage})

//CREATE VIDEO
const multiUpload = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);
router.post("/", verifyToken, multiUpload , createVideo);

//RANDOM VIDEOS
router.get("/ran", randomVideos);

//SUBSCRIBED CHANNEL VIDEO
router.get("/sub", verifyToken, getSubscribers);

//TRENDING VIDEOS
router.get("/trend", trendingVideos);

//SEARCH BY TAGS
router.get("/tags", getVideosByTags);

//SEARCH BY TITLE
router.get("/search", getVideosBySearch);

//UPDATE A VIDEO
router.put("/:id", verifyToken, updateVideo);

//DELETE A VIDEO
router.delete("/:id", verifyToken, deleteVideo);

//GET A VIDEO
router.get("/:id", getAVideo);

//INCREASE VIEWS
router.put("/view/:id", addView);

//LIKE A VIDEO
router.put("/like/:videoId", verifyToken, likeVideo);

//DISLIKE VIDEO
router.put("/dislike/:videoId", verifyToken, dislikeVideo);

module.exports = router;
