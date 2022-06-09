"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatiro'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    precio: {
        type: Number
    },
    costo: {
        type: Number,
        default: 0
    },
    minimo: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    }
});
//module.exports = model('Producto', ProductoSchema);
const Product = (0, mongoose_1.model)('Producto', ProductoSchema);
exports.Product = Product;
