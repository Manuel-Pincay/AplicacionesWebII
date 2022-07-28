const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const exonerado_routes = require('./routes/datos');


app.use('/api/vacaciones', exonerado_routes);


const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.clear();

    console.log(`Servidor corriendo en el puerto: http://localhost:${port}/api/vacaciones/`);
});