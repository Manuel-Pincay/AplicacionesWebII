const express = require ('express')
const app= express()

respuesta={
    data:[],
    arquitectura: 'Microservicio',
    descripcion: 'Usuario Micro'
}

app.get('/api/v2/Usuarios', (req, res)=>{
    respuesta.data=[]
    respuesta.data.push("Administrador", "Support", "meat", "jungla")
    console.log(`Microservicio de Usuarios`);
    return res.send(respuesta)

    })

module.exports= app