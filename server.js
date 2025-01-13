// import express from 'express';
// import dotenv from 'dotenv';


// const app = express();
// dotenv.config()


// const PORT = process.env.PORT

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Define a simple route
// app.get('/api/get', (req, res) => {
//   res.send('Hello, world!');
// });

// app.get('/api/get_user_details', (req, res) => {
//     res.send({
//         user : {
//             name : "Ansh",
//             age : 20,
//             contact : 172288282
//         },env : process.env.NAME
//     });
//   });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });






import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/api/get', (req, res) => {
  res.send('<h1>Jai Shree Ram</h1>');
});

// Route to send user details and include HTML content
app.get('/api/get_user_details', (req, res) => {
  res.send(`
    <h1>JAI BABA KALIVEER JI</h1>
    <p>User Details:</p>
    <ul>
      <li>Name: Ansh</li>
      <li>Age: 20</li>
      <li>Contact: 172288282</li>
    </ul>
    <p>Environment: ${process.env.NAME}</p>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
