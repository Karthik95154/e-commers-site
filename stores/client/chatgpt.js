const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3579;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (your HTML and CSS)
app.use(express.static('client'));

// Routes for handling signup and login
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Add code here to handle signup, e.g., saving to a database
  // Example:
  // db.saveUser(username, email, password);

  // Send a response back to the client
  res.send('Signup successful!');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Add code here to handle login, e.g., checking credentials
  // Example:
  // const user = db.getUserByEmail(email);
  // if (user && user.password === password) {
  //   res.send('Login successful!');
  // } else {
  //   res.status(401).send('Invalid credentials');
  // }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
