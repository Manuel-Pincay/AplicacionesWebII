/* npm i mongoose
npm init -y */
/* usar mongoose */
/* ----------------------------------------------------------------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------------------------------------------------------------- */

const mongoose = require('mongoose');
const conexion = "mongodb+srv://manuel12pincay:manuel12pincay@cluster0.pfnqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/* Usar funcion asincronica auto iniciada*/
( async ()=>{
/* primero confirmar conexion a la base de datos*/
const estadodeconexion = await mongoose.connect(conexion);

/* ----------------------------------------------------------------------------------------------------------------------------------- */
const Grupo = mongoose.model("Grupo",{nombre: String});
/* No es necesario definir que un Grupo tiene muchos usuarios, funciona solo definiendo que un usuario pertenece a un grupo */
/* Se podria definir que un Grupo tiene muchos usuarios en el caso que se vaya a usar en el codigo */
/* ----------------------------------------------------------------------------------------------------------------------------------- */
const Permiso = mongoose.model("Permiso",{nombre: String});

/* ----------------------------------------------------------------------------------------------------------------------------------- */
/* Creando modelo de la base de datos */
/* Es opcional crear el usuario, pero recomendable */
const Usuario = mongoose.model("Usuario", 
/* Parametros o Atributos del Usuario,  Para agregar que pertenece a un grupo*/
{   nombre: String,
    idgrupo: {  type: mongoose.Types.ObjectId , ref:"Grupo"},
    /*permisos: {  type: mongoose.Types.ObjectId , ref:"Permiso"} solo cuando tenga 1 permiso o algo asi xd*/
    /* Definiendo arreglo de Objetos */
    permisos:[
        {
            permitido:{type: mongoose.Schema.Types.ObjectId, ref:"Permiso"},
            estado: {type: Boolean}
        }
    ]
});
/* ----------------------------------------------------------------------------------------------------------------------------------- */
/* REFERENCIA -->ref  Es la llave foranea de ese objeto  */
/* ----------------------------------------------------------------------------------------------------------------------------------- */
/* Nombre del Grupo */
const Grupo1 = new Grupo({nombre:"Administradores"})
/* Funcion de guardado, para estar seguro se usa el await */
/* Estamos tratando que se guarde la informacion paso a paso para que el codigo funcione correctamente */
const guardadogrupo = await Grupo1.save();
/* ----------------------------------------------------------------------------------------------------------------------------------- */
/* Creando instancias de permisos, y almacenarlos */
const Permiso1 = new Permiso({nombre:"Grabar"});
const guardadopermiso1 = await Permiso1.save();

const Permiso2 = new Permiso({nombre:"Eliminar"});
const guardadopermiso2 = await Permiso2.save();
/* ----------------------------------------------------------------------------------------------------------------------------------- */
 /* Agregar los atributos al usuario nuevo */
const Usuario1 = new Usuario(
    {   nombre:"Prueba",
        idgrupo: guardadogrupo._id,
        permisos:[
            {permitido: guardadopermiso1._id, estado:true},
            {permitido: guardadopermiso2._id, estado:true},
        ]
    });

const guardado = await Usuario1.save();
/* ----------------------------------------------------------------------------------------------------------------------------------- */


const resultado = await Usuario.find()
.populate("idgrupo")
.populate("permisos.permitido");

console.log(resultado[3].idgrupo);
}) ();

