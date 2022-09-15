require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const crypto = require("crypto");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs")
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.AWS_BUCKET_SECRET_KEY;

const s3 = new S3Client({

  region,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
 
});

const uploadFile = async (file) => {
  // console.log(file.originalname + crypto.randomBytes(12).toString("hex"));


const fileStream = fs.createReadStream(file.path)


  const params = {
    Bucket: bucketName,
    Key: file.filename,

    Body: fileStream,

    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);
};

//download file from s3 bucket

exports.uploadFile = uploadFile;
