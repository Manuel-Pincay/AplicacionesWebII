import {NextFunction,Request,Response} from 'express'

import { validationResult } from 'express-validator'

const validarCampos = (req:Request, res:Response, next:NextFunction) => {
    const erorrs = validationResult(req);
    if (!erorrs.isEmpty){
        return res.status(400).json({erorrs})
    }
    next();
}
export { validarCampos}