const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Connect API
app.use('/api/blogs', blogRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
