const express = require('express');

const server = express();


server.use(express.json());

server.get('/tests', (req,res) => {
    res.status(200).json({ message: 'In there like swim wear' });
})


module.exports = server;