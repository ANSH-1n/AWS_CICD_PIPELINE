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






// import express from 'express';
// import dotenv from 'dotenv';

// const app = express();
// dotenv.config();

// const PORT = process.env.PORT;


// app.use(express.json());


// app.get('/api/get', (req, res) => {
//   res.send('<h1>Jai Shree Ram</h1>');
// });


// app.get('/api/get_user_details', (req, res) => {
//   res.send(`
//     <h1>JAI BABA KALIVEER JI</h1>
//     <p>User Details:</p>
//     <ul>
//       <li>Name: Ansh</li>
//       <li>Age: 20</li>
//       <li>Contact: 172288282</li>
//     </ul>
//     <p>Environment: ${process.env.NAME}</p>
//   `);
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





























import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb'; 

const app = express();
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://anshjamwal10102003:ansh@dryfruit.kqgt1.mongodb.net/Dry_Fruit?retryWrites=true&w=majority&appName=DryFruit';


let db;
MongoClient.connect(MONGODB_URI)
  .then((client) => {
    console.log('Connected to MongoDB');
    db = client.db('Dry_Fruit'); 
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });

const PORT = process.env.PORT || 8000;


app.use(express.json());


app.get('/api/get', (req, res) => {
  res.send(`
    <h1>Login Page</h1>
    <form id="loginForm">
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username"><br><br>
      
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password"><br><br>
      
      <button type="button" onclick="login()">Login</button>
    </form>

    <script>
      function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    </script>
  `);
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;


  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Connect to the collection `TEST`
    const collection = db.collection('TEST');

    // Create a new document for the login
    const result = await collection.insertOne({
      username: username,
      password: password,
      timestamp: new Date(),
    });

    res.status(200).json({ message: 'Login data stored successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving login data:', error);
    res.status(500).json({ message: 'Error saving login data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
