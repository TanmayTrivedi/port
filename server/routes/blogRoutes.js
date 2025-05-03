// server/routes/blogRoutes.js

const express = require('express');
const router = express.Router();

const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

// GET all blogs
router.get('/', getAllBlogs);

// GET a single blog by ID
router.get('/:id', getBlogById);

// CREATE a new blog
router.post('/', createBlog);

// UPDATE a blog by ID
router.put('/:id', updateBlog);

// DELETE a blog by ID
router.delete('/:id', deleteBlog);

module.exports = router;
