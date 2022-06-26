const servidor = require('./src/app')

servidor.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de Productos corriendo en puerto ${process.env.PORT}`)
})