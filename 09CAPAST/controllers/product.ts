import {Product} from '../models'
import {IProducto} from '../interfaces'
import { Request, Response } from 'express'

const obtenerProductos = async (req:Request, res:Response) => {
    const {limite = '10', desde ='0'} = req.query;
    const query = {estado:true};
    const [total,productos]:[Number,IProducto[]] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    res.json({total,
        productos})
}
const obtenerProducto = async (req:Request, res:Response) => {
    const {id} = req.params
    const producto:IProducto|null = await Product.findById(id);
    res.json(producto)

    
}
const crearProducto = async (req:Request, res:Response) => {
    
}

export {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
}