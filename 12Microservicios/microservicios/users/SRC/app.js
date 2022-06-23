const express = require ('express')
const app= express()

respuesta={
    data:[],
    arquitectura: 'Microservicio',
    descripcion: 'users Micro'
}

app.get('/api/v2/users', (req, res)=>{
    respuesta.data=[]
    respuesta.data.push("Consumidor final", "Juan Carlos", "Manu Manito")
    console.log(`Microservicio de clientes`);
    return res.send(respuesta)
    })

module.exports= app