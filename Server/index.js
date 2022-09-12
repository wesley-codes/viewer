const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user")
const videoRoute = require("./routes/video")
const commentRoute = require("./routes/comment")
const cookieParser = require("cookie-parser")
const app = express();
dotenv.config();
app.use(cookieParser())
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("=====DB connection established====="))
  .catch((err) => console.log(err));

//=====auth Route=======
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute );
app.use("/api/v1/video",videoRoute);
app.use("/api/v1/comment", commentRoute)

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const errMessage = err.errMessage || "Something went wrong!";
  console.log(err)
  return res.status(status).json({
    success: false,
    status,
    errMessage,
  });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
