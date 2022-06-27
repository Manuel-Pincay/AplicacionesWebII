const express = require ('express')
const app= express()

respuesta={
    data:[],
    arquitectura: 'Microservicio',
    descripcion: 'Producto Micro'
}

app.get('/api/v2/productos', (req, res)=>{
    respuesta.data=[]
    respuesta.data.push("pizza", "hamburguesa", "papas fritas", "encebollado")
    console.log(`Microservicio de Productos`);
    return res.send(respuesta)

    })

module.exports= app