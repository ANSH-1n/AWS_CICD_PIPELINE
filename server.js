import express from 'express';

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/api/get', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
