require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.AWS_BUCKET_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

//uplaod file to s3 bucket
 const uploadFile = (file) => {


   

   const fileStream = fs.createReadStream(file)
   
    const uploadParam = {
    Bucket: bucketName,
    Body: fileStream ,
    Key: file.filename,
  };
  return s3.upload(uploadParam).promise();
};
 
exports.uploadFile = uploadFile;

//download file from s3 bucket
