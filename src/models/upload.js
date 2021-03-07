const mongoose = require('mongoose');

const { MONGO_URL } = process.env

module.exports =  mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true, useUnifiedTopology: true
  }
);

const uploadSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

uploadSchema.pre('save', function() {
  if (!this.url) {
    this.url = `${process.env.API_URL}/files/${this.key}`
  }
});

module.exports = mongoose.model('Upload', uploadSchema)