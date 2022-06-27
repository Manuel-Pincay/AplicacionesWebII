
/*
Para que todos los comandos funcionen de manera correcta previamente deben de tener descargado la dependencia de mongoose,
caso contario no serviran los comandos que vayamos a utilizar
 */
            //-----------Conexion con la base de datos--------------------
const { Timestamp, Decimal128, Double } = require('bson');
const mongoose = require('mongoose');
const conexion="mongodb+srv://JesusRC:Jesus2022@cluster0.j9wvs.mongodb.net/AplicacionesWebII?retryWrites=true&w=majority";

(async ()=>{
//Comprobacion de la conexion de la base de datos
const estadoConexion = await mongoose.connect(conexion);

//Creacion de entidades
const Establecimiento =mongoose.model("Establecimiento",
{
    ESTABLECIMIENTO_ID : Number,
    ESTABLECIMIENTO_NOMBRE : String,
    ESTABLECIMIENTO_DESCRIPCION : String
});
const Espacios =mongoose.model("Espacios",
{
    ESPACIO_ID : Number, 
    ESPACIO_ESTADO : String,
});
const Servicios =mongoose.model("Servicios",
{
    SERVICIO_ID : Number,
    SERVICIO_NOMBRE : String,
    SERVICIO_PRECIO : Number,
    SERVICIO_TIEMPO : String,
    ESTABLECIMIENTO_NOMBRE : { type: mongoose.Types.ObjectId,ref:"Establecimiento"}
});
const Trabajadores =mongoose.model("Trabajadores",
{
    TRABAJADOR_ID : String,
    TRABAJADOR_NOMBRE : String,
    TRABAJADOR_APELLIDO : String,
    TRABAJADOR_CEDULA: String,
    TRABAJADOR_TELEFONO : Number,
    TRABAJADOR_CARGO : String
});
const Clientes =mongoose.model("Clientes",
{
    CLIENTE_ID : Number,
    CLIENTE_NOMBRE : String,
    CLIENTE_CEDULA : String,
    CLIENTE_TELEFONO : String
});
const Carros =mongoose.model("Carros",
{
    CARRO_PLACA : String,
    CARRO_MODELO : String,
    CARRO_AÑO : Number,
    CARRO_COMENTARIO : String
    
});
const Registro =mongoose.model("Registro",
{
    REGISTRO_MANTENIMIENTO : String,
    REGISTRO_FECHA : Date,
    REGISTRO_KILOMETRAJE : Number,
    CARRO_PLACA : {type: mongoose.Types.ObjectId,ref: "Carros"}
});
const Reservacion = mongoose.model("Reservacion",{
    RESERVACION_ID : Number,
    CLIENTE_ID : {type: mongoose.Types.ObjectId,ref: "Clientes"} ,
    SERVICIO_ID : {type: mongoose.Types.ObjectId,ref: "Servicios"},
    ESTABLECIMIENTO_ID : {type: mongoose.Types.ObjectId,ref: "Establecimientos"},
    RESERVACION_PRECIO : Number,
    RESERVACION_FECHA : Date,
    RESERVACION_HORA : String,
    CARRO_PLACA : {type: mongoose.Types.ObjectId,ref: "Carros"}
})




})();