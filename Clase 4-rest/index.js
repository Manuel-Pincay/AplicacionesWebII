/* Crear las constantes, express y cors */

const express = require('express');
const cors = require('cors');


const app = express();
const puerto = 5000;
/* es una funcion que permite inyectar un midelboard */
/* Midelboard es  */
app.use(cors()).use(express.json());

/* solicitar un recuros en el protocolo http */

app.get('/prueba',(req,res,next)=>{
    next();
    }, (req,res,next)=>{
    res.status(200).send('oli mundo ')
    }
);
/* Otro midelboard  */
app.use('/prubea',(req,res,next)=>{
    req.body.nombre = req.body.nombre.toUpperCase();
    next();
});


/* /bajo el metodo post */
app.post('/prueba',(req,res,next)=>{
    res.status(201).send(req.body);
    next();
});

app.use('/prubea',(req,res,next)=>{
    console.log(`Despues de Middleware`);
    res.status(201).send(req.body);
    next();
});

/* levantar el servidor */
app.listen(puerto, ()=>{
    console.log(`Servidor ejecutandose en puerto ${puerto}`);
});