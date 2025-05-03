// server/controllers/blogController.js

const { blogs, generateId } = require('../data/blogData');

// Get all blogs
const getAllBlogs = (req, res) => {
  res.json(blogs);
};

// Create a new blog
const createBlog = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }

  const newBlog = {
    _id: generateId(),
    title,
    content,
  };

  blogs.push(newBlog);

  res.status(201).json(newBlog);
};

// Get a single blog by ID
const getBlogById = (req, res) => {
  const blog = blogs.find(b => b._id === req.params.id);
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found.' });
  }
  res.json(blog);
};

// Update a blog
const updateBlog = (req, res) => {
  const blog = blogs.find(b => b._id === req.params.id);
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found.' });
  }

  const { title, content } = req.body;
  if (title) blog.title = title;
  if (content) blog.content = content;

  res.json(blog);
};

// Delete a blog
const deleteBlog = (req, res) => {
  const index = blogs.findIndex(b => b._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Blog not found.' });
  }

  const deleted = blogs.splice(index, 1);
  res.json({ message: 'Blog deleted successfully.', blog: deleted[0] });
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog
};
