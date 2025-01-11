import express from 'express';

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/api/get', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/get_user_details', (req, res) => {
    res.send({
        user : {
            name : "Ansh",
            age : 20,
            contact : 172288282
        }
    });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
