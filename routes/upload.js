const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('file'), function (req, res, next) {
  if (req.file) {
    console.log('File uploaded');
  }

  res.redirect('/');
})

module.exports = router;