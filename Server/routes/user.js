const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unSubscribeUser,
} = require("../controllers/user");
const { verifyToken } = require("../verifyToken");

//update user

router.put("/:id", verifyToken, updateUser);

//delete User

router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", getUser);

//subscribe a user

router.put("/subscribe/:id", verifyToken, subscribeUser);

//unsbscribe a user
router.put("/unSubscribe/:id", verifyToken, unSubscribeUser);

//like a video

//dislike a video

module.exports = router;
