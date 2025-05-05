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
router.post('/', (req, res) => {
  if (req.body.secretKey !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  createBlog(req, res);
});

// UPDATE a blog by ID
router.put('/:id', (req, res) => {
  if (req.body.secretKey !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  updateBlog(req, res);
});

// DELETE a blog by ID
router.delete('/:id', (req, res) => {
  if (req.body.secretKey !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  deleteBlog(req, res);
});

module.exports = router;
