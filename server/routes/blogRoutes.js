// server/routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const { getAllBlogs, createBlog } = require('../controllers/blogController');

// Routes
router.get('/blogs', getAllBlogs);
router.post('/blogs', createBlog);

module.exports = router;
