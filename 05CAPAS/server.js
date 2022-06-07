const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./database/configdatabase');

class Server {
    constructor() {
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;

        this.paths= {
            productos:'/api/productos',
            cliente:'/api/clientes',

        }
        this.conectarBD();
        this.middleawares();
        this.routes();
        this.router.use('/v1/sextoa',this.app);
        this._express= express().use(this.router);
    
}
    async conectarBD(){
            await dbConnection();
        }
    middleawares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.paths.productos,
            require('./routes/productos'))
    }
    listen(){
        this._express.listen(thi.port,()=>{
            console.log(`Servidor corriendo en puerto   `)
        })
    }

}

module.exports = Server;