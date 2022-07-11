const { Schema, model } = require('mongoose')

const ProductoSchema = Schema({

    nombre:{
        type:String,
        require:[true, `El nombre del producto es obliogatorio`], 
        unique: true
    },
    precio:{
        type: Number,
        default: 0
    },
    estado:{
        type: Boolean,
        default: true,
        required: true,
    },
    costo:{
        type:Number,
        default:0,
    },
    minimo:{
        type:Number,
        default:0,
    },
    stock:{

    }
})

module.exports = model('Producto',ProductoSchema);