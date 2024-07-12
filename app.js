const express = require('express');
const app = express();
const port = 3030;

const fs = require('fs'); //import filesystem to read template views (not sure if I will need with Pug)
const path = require('path'); // Using Path

//set up Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Define a route for the root URL
app.get('/', (req, res) => {
    res.render("login",); //will fill this with more info
});
app.get("/signup", (req, res) => {
    res.render("signup",) //will fill this with more info
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

