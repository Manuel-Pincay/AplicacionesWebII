"use strict";
/*
npm init --y
npm i express
tsc install
tsc -w */
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server_1 = require("./server");
const server = new server_1.Server();
server.listen();
/* import express from 'express'

const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.json({
        msg:'ok'
    })
})

app.listen(port, ()=>{
    console.log(`prueba funcionando`);
}) */ 
