const router = require('express').Router();
const mongoose = require('mongoose');
const multer = require('multer');
// const multerAWS = require('./multer/multer.js');
const multerConfig = require('./config/multer')
const Upload = require('./models/upload');



mongoose.connect(
  'mongodb://127.0.0.1:27017/test',
  {
    useNewUrlParser: true, useUnifiedTopology: true
  }
);

router.get('/', (req, res) => res.send('Hello '));

router.post('/', multer(multerConfig).single('file'), async (req, res) => {
  const { originalname: name, size, key, url = '' } = req.file
  const upload = await Upload.create({
    name,
    key,
    size,
    url,
  })
  console.log(upload)
  res.status(200).json(upload)
})

module.exports = router;