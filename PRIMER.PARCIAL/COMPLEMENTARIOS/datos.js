//arreglos
const establecimientos= [
    {
        idest:1,
        nombreesta:'Moto Servicio Don Nacho',
        descrip:'Especializados en mantenimiento de motos y cuadrones, tambien contamos con venta de repuestos.'
    },
    {
        idest:2,
        nombreesta:'Lubricadora El Chino',
        descrip:'Mantenimiento de vehiculos livianos, Venta de respuestos y limpieza del automotor.'
    }

]

const servicios= [
    {
        idser:1,
        servi:'Engrasado de cadena',
        precio:5,
        tiempo: '30 minutos',
        nombreesta:'Moto Servicio Don Nacho'
    },
    {
        idser:2,
        servi:'Mantenimiento del radiador',
        precio: 15,
        tiempo: '1 hora',
        nombreesta:'Lubricadora El Chino'
    }

]

const trabajadores =[
    {
        idt: 'LEC1',
        nombretra:"Julio Cesar",
        apellidrotra: "Zambrano Zambrano",
        cedtra:'1635741087',
        numtra: '0965741856',
        cargo: 'Mecánico'
    },
   
    {
        idt: 'MSDN1',
        nombretra:"Carlos Ernesto",
        apellidrotra: "Macias Fernández",
        cedtra:'1308741203',
        numtra: '0958012967',
        cargo: 'Auxiliar de mecánico'
    }

]

const espacios =[
    {
        idespa:'1.1',
        estado: 'Disponible'
    },
    {
        idespa:'1.2',
        estado: 'Disponible'
    },
    {
        idespa:'1.3',
        estado: 'Ocupado'
    },


    {
        idespa:'2.1',
        estado: 'Ocupado'
    },
    {
        idespa:'2.2',
        estado: 'Disponible'
    },
    {
        idespa:'2.3',
        estado: 'Ocupado'
    }

]

const clientes =[



    {
        idcli:1,
        nombrecli:'Juan Pablo',
        apellidocli:'Cedeño Bravo',
        cedcli: '1367483671',
        telefcli:'0978476532',
        carros:[
            {
                placa: 'MBC-7854',
                modelo:'Kia rio xcite',
                color: 'Azul',
                año:'2020',
                comentario: 'Cajuela con dificultad para abrir.',
                
            }
        ],
        registro:[
            {
                mante:'Mantenimiento de radiador',
                fecha: '25-04-2022',
                kilometraje: '400000'
            }
        ],
    },


    {

        idcli:2,
        nombrecli:'Jose Luis',
        apellidocli:'Figueroa Carreño',
        cedcli: '1478657492',
        telefcli:'0996736570',
        carros:[
            {
                placa: 'MAA-4561',
                modelo:'Harley-Davidson Nightster',
                color: 'Negro',
                año:'2022',
                comentario: 'El tanque de gasolina está un poco flojo',
                
            }
        ],
        registro:[
            {
                mante:'Cambio de llantas',
                fecha: '15-03-2022',
                kilometraje: '243000'
            }
        ]
    }

]


//Exportacion de modulos con el fin de usar los datos en un archivo js externo (exportacion de datos)
module.exports = {
    clientes
};