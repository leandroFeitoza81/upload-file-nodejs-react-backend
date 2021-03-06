const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const multerConfig = require('./multer/multer');

const upload = multer(multerConfig);

router.get('/', (req, res) => res.send('Hello '));

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file)
  res.status(200).json({up: 'load'})
})

module.exports = router;