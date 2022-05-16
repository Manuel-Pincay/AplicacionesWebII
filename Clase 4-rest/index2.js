const express = require('express');
const cors = require('cors');

const app = express();
const ruta = express.Router();
const puerto = 5001;
let comidas = [];
/* Middleware */
app.use(cors()).use(express.json());
/* Firmas req,res */
ruta.get('/',(req,res)=>{   
    res.status(200).send(comidas);
})
/* En el post se recomienda devolver el objeto que se inserta */
ruta.post('/',(req,res)=>{
    const {body} = req;
    /* Validacion: Filta se hay u dato repetido con un objeto con el mismo codigo en el body  */
    if(comidas.filter(c=> c.codigo===body.codigo ).length>0)
    {   
        /* PARA QUE NO EXISTA FALLOS SE COLOCA UN RETURN PARA QUE EL CODIGO SE DETENGA */
        return res.status(400).send({
            message:``,
            res: body
        })
    }

    comidas.push(body);
    res.status(201).send({
        message:`El dato se inserto correctamente`,
        res:body
    })


})

/* creacion de rutas */
ruta.get('/')
ruta.get('/:id')
ruta.post('/')
ruta.put('/')
ruta.delete('/')

app.use('/comidas', ruta);
app.listen(puerto, ()=>{
    console.log(`Servidor Funcionando en http://localhost:${puerto}`);
})
