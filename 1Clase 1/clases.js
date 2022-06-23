const persona = {
    nombre: "Manuel",
    apellido: "Pincay",
    esdocente: true,
    esestudiante: false,
    geolocalizacion:{
        lat:234.234234,
        lng:34.165161,
    },
    getnombrevompleto: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

/* console.log(persona.getnombrevompleto()) */


function mostrarDatos({nombre, apellido, geolocalizacion:{lat,lng}, getnombrevompleto})
{
    console.log(nombre)
    console.log(apellido)
    console.log(lat)
    console.log(lng)
    console.log(getnombrevompleto())
}

mostrarDatos(persona)