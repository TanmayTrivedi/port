// server/controllers/blogController.js

const blogs = require('../data/blogsData');

// Get all blogs
const getAllBlogs = (req, res) => {
  res.json(blogs);
};

// Create a new blog
const createBlog = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and Content are required." });
  }

  const newBlog = {
    id: blogs.length + 1,
    title,
    content
  };

  blogs.push(newBlog);

  res.status(201).json(newBlog);
};

module.exports = { getAllBlogs, createBlog };
