// server/server.js

const express = require('express');
const cors = require('cors');
const blogData = require('./data/blogData');

const app = express();

// Enable CORS so your frontend (localhost:3000) can access the backend (localhost:5000)
app.use(cors());

// Route to get all blogs
app.get('/api/blogs', (req, res) => {
  const blogs = Object.entries(blogData).map(([id, blog]) => ({
    _id: id,
    ...blog,
  }));
  res.json(blogs);
});

// Route to get a single blog by ID
app.get('/api/blogs/:id', (req, res) => {
  const blog = blogData[req.params.id];
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
