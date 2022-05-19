/* 
npm init --y
npm i mongoose
npm i nodemon
npm i dotenv  
npm i express -validator
npm i cors */

require ('dotenv').config()

const Server = require('./server');

const server = new Server();

server.listen();