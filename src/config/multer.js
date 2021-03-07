const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3')

const MAX_SIZE_TWO_MEGABYTES = 2 * 1024 * 1024;

const storageTypes = {
  local: multer.diskStorage({
    destination: (_req, _file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (_req, file, callback) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) callback (err);
        file.key = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (_req, file, callback) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) callback (err);
        fileName = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, fileName);
      });
    },
  })
};

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes['s3'],
  limits: { fileSize: MAX_SIZE_TWO_MEGABYTES }
};
