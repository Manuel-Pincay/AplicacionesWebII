const express = require('express');
const vacacionesController = require('../controllers/datos');

const app = express.Router();

app.post('/agregar', vacacionesController.createDatos);
app.get('/', vacacionesController.readDatos);
app.get('/ver/:idemp', vacacionesController.readDato);
app.patch('/editar/:idemp', vacacionesController.updateDato);
app.delete('/eliminar/:idemp', vacacionesController.deleteDato);

module.exports = app;