const {Router} = require('express');
const {check}= require('express-validator');

/* cheack = Middleware  */

const {obtenerProductos,
    Obtenerproducto,
    Crearproducto,
    Actualizarproducto,
    Borrarproducto
    } = require('../controllers').Producto;



/* const { validarCampos  } = require('../middlewares');
 */
const router = Router();

router.get('/', obtenerProductos)
/* Check verifica si el ID es valido o si esat vacio */
router.get('/:id',[check('id', 'El id no es valido').isMongoId()], Obtenerproducto)

/* Check valida (en este caso si esta vacio ese campo) */
router.post('/', [check('Nombre es obligatorio').not().isEmpty()],/* ValidarCampos,  */Crearproducto)

/* Check verifica si el ID es valido o si esat vacio */
router.put('/:id',[check('id', 'El id no es valido').isMongoId()], Actualizarproducto)

/* Check verifica si el ID es valido o si esat vacio */
router.delete('/:id',[check('id', 'El id no es valido').isMongoId()],Borrarproducto)

module.exports = router;