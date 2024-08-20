const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
