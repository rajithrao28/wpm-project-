const express = require('express');
const path = require('path');

const app = express();
const router = require('./myapp/routes/index'); // Adjust path if needed

// Set the view engine
app.set('views', path.join(__dirname, 'myapp/views'));
app.set('view engine', 'jade');

// Serve static files (like style.css)
app.use(express.static(path.join(__dirname, 'myapp', 'public')));

// Use routes
app.use('/', router);

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
