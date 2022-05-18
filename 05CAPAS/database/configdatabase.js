const mongoose = require('mongoose');

const dbConnection = async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_CN)
        console.log(`Base de datos conectada...`);
    } catch (error) {
        console.log(`No se pudo conectar a la Base de Datos`);
        throw new Error(`error al conectar con la base de datos`)
    }

}