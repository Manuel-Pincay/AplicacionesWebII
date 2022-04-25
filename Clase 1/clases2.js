class claseprueba
{
    constructor(nombre, apellido)
    {
        this.nombre= nombre;
        this.apellido= apellido;
    }
    persona= {
        nombre:"",
        apellido:"",
        esDocente:"",
        geolocalizacion:{
            lat:12.15616,
            lng:34.14654,   
        },
        prueba:()=>{
       
            return this.nombre;
        }
    }    
    /* getnombrecompleto()
    {
        return`${this.nombre} ${this.apellido}`
    } */
}
let personax = new claseprueba ('Bart','Pincay');

console.log(personax.persona.prueba())
/* const persona= new persona("Bart","Simpson");
console.log(persona.getnombrecompleto); */

