const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    videoId: {type:String, required: true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    video: { type: String, required: true },
    views: { type: Number, default: 0 },
    tags: { type: [String], default: [] },
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);







// const deletedVideo = await Video.findByIdAndDelete(req.params.id);
