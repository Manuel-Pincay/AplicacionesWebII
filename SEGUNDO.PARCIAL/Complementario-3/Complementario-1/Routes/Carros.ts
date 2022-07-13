import {Router} from 'express'
import {check} from 'express-validator'
import { Carro } from '../Controllers/Index'

const { obtenerCarro, obtenerCarros, crearCarro, actualizarCarro, borrarCarro, recuperarCarro} = Carro

const router = Router();

router.get('/' , obtenerCarros)
router.get('/:CARRO_PLACA', obtenerCarro)
router.post('/', [check('CARRO_PLACA', 'La placa es obligatoria').not().isEmpty()], crearCarro)
router.put('/:CARRO_PLACA',[check('CARRO_PLACA', 'La placa es obligatoria').not().isEmpty()], actualizarCarro)
router.delete('/:CARRO_PLACA', borrarCarro)
router.put('/recuperar/:CARRO_PLACA', recuperarCarro)

export{router}