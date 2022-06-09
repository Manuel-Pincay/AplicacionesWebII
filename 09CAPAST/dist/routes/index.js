"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampos } = middlewares_1.default;
const { crearProducto, obtenerProducto, obtenerProductos } = controllers_1.Producto;
const router = (0, express_1.Router)();
router.get('/', obtenerProducto);
router.get('/id', (0, express_validator_1.check)('id', 'Debe ser una id Validado').isMongoId(), validarCampos, obtenerProductos);
router.post('/', crearProducto);
