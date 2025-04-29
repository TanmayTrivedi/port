const express = require('express');
const router = express.Router();

// Sample blog data
const blogs = [
  { _id: "1", title: "How I Built My Portfolio", content: "A step-by-step guide to building my portfolio website using React and Tailwind." },
  { _id: "2", title: "Learning React the Fun Way", content: "How interactive projects helped me master React faster." },
  { _id: "3", title: "Integrating AI in Frontend Projects", content: "A look into using ChatGPT and AI tools in real-world frontend apps." },
  { _id: "4", title: "Fixing UI Readability Issues in Hover States", content: "Tips for improving hover interactions and text visibility." },
];

// GET /api/blogs
router.get('/', (req, res) => {
  res.json({ blogs }); // ✅ sending as { blogs: [...] }
});

module.exports = router;
