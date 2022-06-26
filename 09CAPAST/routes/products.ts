import {Router} from 'express'
import {check} from 'express-validator'
import { Producto } from '../controllers'
import funciones from '../middlewares'
const {validarCampos} = funciones
const { crearProducto,obtenerProducto, obtenerProductos} = Producto

const router = Router ()

router.get('/', obtenerProducto)
router.get('/id', check('id','Debe ser una id Validado').isMongoId(),validarCampos, obtenerProductos)
router.post('/', crearProducto)

export {router}