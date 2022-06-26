//En la siguiente linea procedemos a importar el contenido del archivo datos.js
const datos = require('./datos');

//En este caso nosotros utilizamos la estructura async-await
async function buscarcli(idcli)
{
    const cliente  = datos.clientes.find((cliente)=> cliente.idcli=== idcli);
    if (!cliente) //utilizamos esta conficion para mostrar un mensaje de error en caso de no encontrar un cliente
    {
        const error= new Error();
        error.message=`Cliente no encontrado`; //mensaje de error
        throw error;
    }
    return cliente; //en caso de que el cliente si se encuentre, se procede a retornar los datos del cliente
}

//imprimimos los datos de cliente siempre y cuando las condiciones se cumplan, en este caso se busca el id del cliente 1
(async ()=> {
    try {
        const cliente =   await buscarcli(5);
        console.log(cliente);
    } catch (error) {
        console.log(error.message)
    }
})();

