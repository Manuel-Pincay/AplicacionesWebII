/* 
npm init --y
npm i express
tsc install
tsc -w */

import {config} from 'dotenv'
config ()

import { Server } from './server'

const server = new Server();

server.listen()




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