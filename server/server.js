// server/server.js
const express = require('express');
const app = express();
const PORT = 5000;

// Import blog routes
const blogRoutes = require('./routes/blogRoutes');

// Middleware
app.use(express.json()); // to accept JSON body data

// Routes
app.use('/api', blogRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
