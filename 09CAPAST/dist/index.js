"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
npm init --y
npm i express
tsc install
ts */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    });
});
app.listen(port, () => {
    console.log(`prueba funcionando`);
});
