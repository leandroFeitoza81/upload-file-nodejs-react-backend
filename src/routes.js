const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')
const Upload = require('./models/upload');


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
  res.status(200).json(upload)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const DELETADO = await Upload.findByIdAndRemove(id)
  res.status(200).json({ DELETADO })
})

module.exports = router;