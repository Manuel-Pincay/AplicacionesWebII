const persona = {
    nombre: "Manuel",
    apellido: "Pincay",
    esdocente: true,
    esestudiante: false,
    geolocalizacion:{
        lat:234.234234,
        lng:34.165161,
    },
    getnombrevompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona.getnombrevompleto())
