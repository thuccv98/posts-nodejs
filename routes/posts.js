const express = require('express');
const router = express.Router();

// Load model
const Post = require('../models/Post');

// Hien thi form de tao post moi
router.get('/add', (req, res) => {
  res.render('posts/add');
});

module.exports = router;
