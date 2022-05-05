/* npm i mongoose
npm init -y */

const mongoose = require('mongoose');
const conexion = "mongodb+srv://manuel12pincay:manuel12pincay@cluster0.pfnqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


( async ()=>{/* primero confirmar conexion a la base de datos*/
const estadodeconexion = await mongoose.connect(conexion);
/* Creando modelo de la base de datos */
/* Es opcional crear el usuario, pero recomendable */
const Usuario = mongoose.model("Usuario", {nombre: String});

const Usuario1 = new Usuario({nombre:"Prueba"});

const guardado = await Usuario1.save();

const resultado = await Usuario.find();

console.log(resultado);
}) ();
