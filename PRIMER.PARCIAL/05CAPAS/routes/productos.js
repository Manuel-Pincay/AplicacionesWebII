const {Router} = require('express');
const {check}= require('express-validator');

/* cheack = Middleware  */

const {ObtenerProductos,
    Obtenerproducto,
    Crearproducto,
    Actualizarproducto,
    Borrarproducto
    } = require('../controllers').Producto;

const router = Router();

//const {ValidarCampos }=require('../middlewares/index/todasLasFunciones');



router.get('/', ObtenerProductos)
/* Check verifica si el ID es valido o si esat vacio */
router.get('/:id',[check('id', 'El id no es valido').isMongoId()], Obtenerproducto)

/* Check valida (en este caso si esta vacio ese campo) */
router.post('/', [check('Nombre es obligatorio').not().isEmpty()],/* ValidarCampos,  */Crearproducto)

/* Check verifica si el ID es valido o si esat vacio */
router.put('/:id',[check('id', 'El id no es valido').isMongoId()], Actualizarproducto)

/* Check verifica si el ID es valido o si esat vacio */
router.delete('/:id',[check('id', 'El id no es valido').isMongoId()],Borrarproducto)

