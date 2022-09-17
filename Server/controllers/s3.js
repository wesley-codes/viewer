require("dotenv").config();
const S3 = require("../Config/s3");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");

const bucketName = process.env.AWS_BUCKET_NAME;

const uploadFile = async (file) => {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: bucketName,
    Key: file.filename,

    Body: fileStream,

    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await S3.send(command);
};

//download file from s3 bucket

exports.uploadFile = uploadFile;
