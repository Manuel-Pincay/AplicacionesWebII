npm 

const mongoose = requiere('mongoose');
const conexion = "mongodb+srv://manuel12pincay:<password>@cluster0.pfnqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(conexion)