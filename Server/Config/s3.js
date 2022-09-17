require("dotenv").config();
const { S3Client } = require("@aws-sdk/client-s3");




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


module.exports = s3