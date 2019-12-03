const express = require('express');

const hubsRouter = require('../hubs/hubs-router')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use("/api/hubs", hubsRouter)






// export default server;//ES6 Modules
module.exports = server;