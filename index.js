// import server

const server = require('./server');


const PORT = process.env.PORT || 4004;


// Listen for server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}....`);
})