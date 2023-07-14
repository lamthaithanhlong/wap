const express = require('express');
const bookRouter = require('./bookRouter')
const app = express();


// middleware

// routes


// error handlers
app.use(bookRouter)

// boostup
app.listen(3000,() => console.log("app is running port 3000"))