const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse application/json
app.use(bodyParser.urlencoded({ extended: true }));

// Mount blog routes
app.use('/api/blogs', blogRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
