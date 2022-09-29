const { createError } = require("../error");
const User = require("../models/user");
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};



const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Deleted sucessfully!" });
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "Can't delete account"));
  }
};



const getUser = async (req, res, next) => {
  
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user._doc;
    res.status(200).json({ ...other });
  } catch (err) {
    next(err);
  }
};



const subscribeUser = async (req, res, next) => {
  try {
    if (req.params.id === req.user.id) {
      res.status(403).json("Can't subscribe to this channel ");
    } else {
      //GET USER ID AND ADD IT TO THE CHANNEL WE ARE SUBSCRIBING TO []
      const user = await User.findByIdAndUpdate(req.user.id, {
        $push: { subscribedUsers: req.params.id }, //OTHER USER CHANNEL ID
      });
      await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: 1 } });
      res.status(200).json("Subscription sucessfull!");
    }
  } catch (err) {
    next(err);
  }
};




const unSubscribeUser = async (req, res, next) => {
  try {
    if (req.params.id === req.user.id) {
      res.status(403).json("Can't unsubscribe to this channel ");
    } else {
      //GET USER ID AND REMOVE  IT TO THE CHANNEL WE ARE SUBSCRIBING TO []
      const user = await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedUsers: req.params.id }, //OTHER USER CHANNEL ID
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });
      res.status(200).json("Unsubscription sucessfull!");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unSubscribeUser,
};
