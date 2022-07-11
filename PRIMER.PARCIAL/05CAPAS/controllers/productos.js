
const { response } = require('express');
const { Producto } = require('../models');


/* Como vamos a usar base de datos mongose(NOSQL) tiene que ser async */
const obtenerProductos = async  (req,res = response )=>{
    const { limite=10, desde=0 } =  req.query;
    const query = { estado:true };
    const [ total, productos ] = await  Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
   ])
   res.json({
       total,
       productos
   })
}
const Obtenerproducto = async(req,res)=>{
    const {id} = req.params;
    const producto = await Producto.findById(id);
    res.json(producto);
    
}
const Crearproducto = async(req,res)=>{
    const {estado, ...body} = req.body;
/* validacion si el producto existe */
    const productoexiste = await Producto.findOne({nombre:body,nombre})
    if (productoexiste) {
        res.status(400).json({
            message:
            `El producto con ese nombre ya existe ${productoexiste.nombre}`
        })
        
    }

    const producto = new Producto(body);
    const productonuevo = await producto.save();
    res.status(201).json(productoNuevo);
    
}
const Actualizarproducto = async (req,res)=>{
    const{id} = req.params;
    const {estado, ...body} = req.body;
    const productoModificado = await Producto.findByIdAndUpdate(id, data,{new:true});
    res.json(productoModificado);
}
const Borrarproducto = async (req,res)=>{
    const {id} = req.params;
    const productoBorrado = await Producto.findByIdAndUpdate(id, {estado:false},{new:true});
    res.json(productoBorrado);
}

module.exports ={
    obtenerProductos,
    Obtenerproducto,
    Crearproducto,
    Actualizarproducto,
    Borrarproducto,

}