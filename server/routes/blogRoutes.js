// server/routes/blogRoutes.js (example)
const express = require('express');
const router = express.Router();

const blogs = [
  { _id: "1", title: "How I Built My Portfolio" },
  { _id: "2", title: "Learning React the Fun Way" },
  { _id: "3", title: "Integrating AI in Frontend Projects" },
  { _id: "4", title: "Fixing UI Readability Issues in Hover States" },
];

// GET /api/blogs
router.get('/', (req, res) => {
  res.json(blogs);
});

module.exports = router;
