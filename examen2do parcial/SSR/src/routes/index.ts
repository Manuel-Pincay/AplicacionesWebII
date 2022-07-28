import { Router } from "express";
import {indexController} from '../controllers/datos'

const router : Router = Router();


router.get('/exonerado/inicio', indexController.index)



export default router