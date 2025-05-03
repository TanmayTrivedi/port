// server/server.js

const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Required to parse JSON bodies

// Blog Routes
app.use('/api/blogs', blogRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Blog API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
