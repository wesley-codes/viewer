const { createError } = require("../error");
const Video = require("../models/video");
const User = require("../models/user");
 const crypto = require("crypto")
 const {uploadFile }= require("./s3")
//TODO NOW USE VIDEOID TO GET VIDEOS

const createVideo = async (req, res, next) => {
  try {
    // const videoData = {...req.body , videoId:crypto.randomBytes(12).toString("hex")}
    // const video = new Video({ userId: req.user.id, ...videoData });
    // await video.save();
    // // console.log(video);
    // res.status(200).json({ msg: "Video sucessfully uploaded", video });

const files = req.files

const {thumbnail , video} = files






const result1 = await uploadFile({thumbnail, video})


console.log(result1)
  } catch (err) {
    next(err);
  }
};

const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    !video && next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      //IF THE USERID RETURNED FROM JWT IS EQUAL TO PARAM.ID
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json({ msg: "Video updated sucessfuly", updatedVideo });
    } else {
      next(403, "Can't update video!");
    }
  } catch (err) {
    next(err);
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    !video && next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      //IF THE USERID RETURNED FROM JWT IS EQUAL TO PARAM.ID
      const deletedVideo = await Video.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Video deleted sucessfuly", deletedVideo });
    } else {
      next(403, "Can't delete video!");
    }
  } catch (err) {
    next(err);
  }
};

const getAVideo = async (req, res, next) => {
  try {
    const video = await Video.findOne({videoId : req.params.id});
    if (!video) return next(createError(404, "Video not found!"));

    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });

    res.status(200).json({ msg: "View Increased" });
  } catch (err) {
    next(err);
  }
};

const randomVideos = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);

    res.status(200).json(videos );
  } catch (err) {
    next(err);
  }
};

const trendingVideos = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 }); //SEARCH THE DB AND RETURN THE MOST VIEWED VIDEOS USING SORT

    res.status(200).json({ msg: "Trends", videos });
  } catch (err) {
    next(err);
  }
};

const getSubscribers = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;
    const list = await Promise.all(
      subscribedChannels.map(async (channelId) => {
        return await Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt)); //SORT FROM THE LATEST
  } catch (err) {
    next(err);
  }
};

const getVideosByTags = async (req, res, next) => {
  const tags = req.query.tags; //USING EXPRESS TO QUERY FOR VIDEO
  const allTags = tags.split(",");
  console.log("=====", allTags);
  try {
    const videos = await Video.find({ tags: { $in: allTags } }).limit(20); //$IN METHOD CHECKS IF THE QUERY IS INCLUDED IN THE DB

    res.status(200).json({ videos });
  } catch (err) {
    next(err);
  }
};

//SEARCH VIDEO BY TITLE
const getVideosBySearch = async (req, res, next) => {
  const searchText = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: searchText, $options: "i" },
    }).limit(40); //SEARCH THE DB AND RETURN THE MOST VIEWED VIDEOS USING SORT

    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

//LIKE A VIDEO

const likeVideo = async (req, res, next) => {
  const { videoId } = req.params;

  try {
    if (videoId === req.user.id) {
      res.status(403).json("You cant like this video!");
    } else {
      //$ADDTOSET METHOD MAKES SURE THAT THE ARRAY IS ONLY ADDED TO THE ARRAY JUST ONCE
      const video = await Video.findByIdAndUpdate(videoId, {
        $addToSet: { likes: req.user.id },
        $pull: { dislikes: req.user.id },
      });
      res.status(200).json("You liked this video");
    }
  } catch (err) {
    next(err);
  }
};

//DISLIKE VIDEO
const dislikeVideo = async (req, res, next) => {
  const { videoId } = req.params;

  try {
    if (videoId === req.user.id) {
      res.status(403).json("You cant like this video!");
    } else {
      //ADDTOSET METHOD MAKES SURE THAT THE ARRAY IS ONLY ADDED TO THE ARRAY JUST ONCE
      const video = await Video.findByIdAndUpdate(videoId, {
        $addToSet: { dislikes: req.user.id },
        $pull: { likes: req.user.id },
      });
      res.status(200).json("You liked this video");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
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
};
