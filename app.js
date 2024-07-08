const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs'); //import filesystem to read template views (not sure if I will need with Pug)
const path = require('path'); // Using Path


// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

