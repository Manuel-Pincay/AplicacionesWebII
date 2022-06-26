import {Router} from 'express'
import {check} from 'express-validator'
import { Carro } from '../Controllers/Index'

const { obtenerCarro, obtenerCarros, crearCarro, actualizarCarro, borrarCarro} = Carro

const router = Router();

router.get('/' , obtenerCarros)
router.post('/:CARRO_PLACA', obtenerCarro)
router.post('/', [check('CARRO_PLACA', 'La placa es obligatoria').not().isEmpty()], crearCarro)
router.put('/:CARRO_PLACA', actualizarCarro)
router.delete('/:CARRO_PLACA', borrarCarro)

export{router}