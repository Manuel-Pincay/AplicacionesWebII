const express = require('express')
const app = express()

const respuesta = {
    data:[],
    arquitectura: 'Monolitico',
    descripcion: 'Acceso a todas las rutas en un solo cualquier cosa'

}
app.use((req, res,next) => {
    respuesta.data=[]
    next()
})

app.get('/api/v1/users',(req,res) =>{
    respuesta.data.push("Admin","Super Admin")
    return res.send(respuesta.data);
})
app.get('/api/v1/productos',(req,res) =>{
    respuesta.data.push("Pizza","hamburguesa","papas fritas")
    return res.send(respuesta.data);
})
app.get('/api/v1/clientes',(req,res) =>{
    respuesta.data.push("Consumindor final","Diosito R","Branley Y")
    return res.send(respuesta.data);
})

module.exports = app;