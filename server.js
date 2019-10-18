const express = require('express');

const sessions = require('express-session');
const UserRouter = require('./users/user-router');

const server = express();

// Session Configuration 
const sessionConfiguration = {
    name: 'thisisthesessionokay?',
    secret: "youarenotfigruingthisoutareyou?",
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
            secure: false,
        },
        resave: false,
        saveUninitialized: true,
}

//Global middleware

server.use(express.json());
server.use(sessions(sessionConfiguration));



//Server routes 
server.use('/api', UserRouter);




// Test Router
server.get('/tests', (req,res) => {
    res.status(200).json({ message: 'In there like swim wear' });
})


module.exports = server;