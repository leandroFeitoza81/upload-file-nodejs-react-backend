const router = require('express').Router();
const mongoose = require('mongoose');
const multer = require('multer');
const multerConfig = require('./config/multer')
const Upload = require('./models/upload');

mongoose.connect(
  'mongodb://127.0.0.1:27017/test',
  {
    useNewUrlParser: true, useUnifiedTopology: true
  }
);

router.get('/', async (_req, res) => {
  const files = await Upload.find()
  res.status(200).json(files)
});

router.post('/', multer(multerConfig).single('file'), async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file
  const upload = await Upload.create({
    name,
    key,
    size,
    url,
  })
  console.log(upload)
  res.status(200).json(upload)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const DELETADO = await Upload.findByIdAndRemove(id)
    res.status(200).json({ DELETADO })
})

module.exports = router;