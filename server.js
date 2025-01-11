import express from 'express';
import dotenv from 'dotenv';


const app = express();
dotenv.config()


const PORT = process.env.PORT

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
        },env : process.env.NAME
    });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
