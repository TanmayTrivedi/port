// server/index.js or wherever your Express routes are

const express = require('express');
const app = express();
const blogData = require('./blogData'); // Make sure this path is correct

app.get('/api/blogs', (req, res) => {
  res.json(Object.entries(blogData).map(([id, data]) => ({
    _id: id,
    title: data.title
  })));
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
