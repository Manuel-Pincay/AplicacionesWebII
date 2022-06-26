const servidor = require('./src/app')

servidor.listen(process.env.PORT || 3000, ()=>{
    console.log(`servidor monolitico funcionando en puerto ${process.env.PORT || 3000}`)
})