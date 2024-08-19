const express = require('express');
const bodyParser = require('body-parser');
const cardRoutes = require('./routes/cardRoutes'); // Make sure this path is correct
const cors = require('cors');
const app = express();
const port = 5000; // or any port of your choice

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/cards', cardRoutes); // Assuming you have routes defined in 'cardRoutes'

// Health Check Endpoint
app.get('/ping', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
