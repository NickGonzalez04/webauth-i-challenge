const express = require('express');



const UserRouter = require('./users/user-router');

const server = express();


server.use(express.json());
server.use('/api', UserRouter);




// Test Router
server.get('/tests', (req,res) => {
    res.status(200).json({ message: 'In there like swim wear' });
})


module.exports = server;