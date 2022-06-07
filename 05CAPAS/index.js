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


/* 
//librerías
const express = require('express');
const cors = require('cors');
// variable
const app= express();

app.use(cors());
app.use(express.json());

//req
//res
const Pregunta1= async(req,res)=>{
    const {nota1,nota2}=req.body;
    const promedio=(nota1+nota2)/2;
    if(promedio <8){
        return res.status(400).send({error:'perdio'})
    }
    else{
        return res.status(400).send({message:'aprobo'})
    }
}

//Metodos
app.post('/ruta',Pregunta1)


//puerto
app.listen(3001,()=>console.log('Esta funcionando')) */