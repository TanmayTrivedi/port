// server/index.js or wherever your Express routes are

const express = require('express');
const app = express();
// index.js or server.js
const blogData = require('./blogData');

app.get('/api/blogs', (req, res) => {
  const blogs = Object.entries(blogData).map(([id, blog]) => ({
    _id: id,
    ...blog
  }));
  res.json(blogs);
});


// Optionally: for full blog details
app.get('/api/blogs/:id', (req, res) => {
  const blog = blogData[req.params.id];
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});
