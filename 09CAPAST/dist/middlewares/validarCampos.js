"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const validarCampos = (req, res, next) => {
    const erorrs = (0, express_validator_1.validationResult)(req);
    if (!erorrs.isEmpty) {
        return res.status(400).json({ erorrs });
    }
    next();
};
exports.validarCampos = validarCampos;
