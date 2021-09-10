const express = require('express');
const router = express.Router();

// Load model
const Post = require('../models/Post');

// Thu nghiem
router.get('/', (req, res) => {
  res.send('day la router post');
});

module.exports = router;
