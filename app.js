const express = require('express');
const app = express();
const port = 3030;

const fs = require('fs'); //import filesystem to read template views (not sure if I will need with Pug)
const path = require('path'); // Using Path
const cookieParser = require('cookie-parser');


//set up Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware
app.use(cookieParser());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.render("login",);
    console.log('Cookies: ', req.cookies);
});
app.get("/signup", (req, res) => {
    res.render("signup",)
});

//error handler


app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

