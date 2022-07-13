import './style.css'
import axios from 'axios';
import swal from 'sweetalert';
import { ICarros, IResCarros } from './interfaces/ICarros';
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CARROS</h1>
`;

const httpAxios = axios.create({
  baseURL: `http://localhost:2500/v1/sextoa/api/`
});

const etiqueta = document.createElement("label")
etiqueta.textContent=`ID`

const input = document.createElement("input")

input.id = "id";

etiqueta.htmlFor = "id";

app.appendChild(etiqueta);
app.appendChild(input);


app.innerHTML += `
<br><br>

<label for='CARRO_PLACA' >CarroPlaca</label><input id='CARRO_PLACA' /><br><br>
<label for='CARRO_MODELO' >CarroModelo</label><input id='CARRO_MODELO' /><br><br>
<label for='CARRO_AÑO' >CarroAño</label><input id='CARRO_AÑO' /><br><br>
<label for='CARRO_COMENTARIO' >CarroComentario</label><input id='CARRO_COMENTARIO' /><br><br>
<label for='Estado' >Estado</label><input id='Estado' /><br><br>
<br><br>
<button id="grabar">GUARDAR DATOS</button>
<button id="nuevo">LIMPIAR CELDAS</button>
<button id="consultar">CONSULTAR BASE DE DATOS</button>



<div id="cuerpo"/>
`;

const id = document.querySelector<HTMLInputElement>('#id')!
const carro_placa = document.querySelector<HTMLInputElement>('#CARRO_PLACA')!
const carro_modelo = document.querySelector<HTMLInputElement>('#CARRO_MODELO')!
const carro_aÑo = document.querySelector<HTMLInputElement>('#CARRO_AÑO')!
const carro_comentario = document.querySelector<HTMLInputElement>('#CARRO_COMENTARIO')!
const estado = document.querySelector<HTMLInputElement>('#Estado')!

const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar = document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!

/* const eliminar = document.querySelector<HTMLButtonElement>("#botoneliminar")! */

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

nuevo.addEventListener('click', () =>{
  id.value=""
  estado.value=""
  carro_placa.value=""
  carro_modelo.value=""
  carro_aÑo.value=""
  carro_comentario.value=""
})

/* ---------------------- INICIO API CONSULTAS GENERAL Y ESPECIFICA---------------------- */
consultar.addEventListener('click', async ()=>{
  /* ---------------------- CONSULTA GENERAL ---------------------- */
    const rescarros:IResCarros = await (await httpAxios.get<IResCarros>('carros')).data;

    const tabla =  document.createElement('table');
    tabla.id="tabla"
    tabla.border="1"

/*     tabla.style.marginTop = "40px";
    tabla.style.marginLeft = "35%";
 */
    tabla.style.marginTop = "40px";
    tabla.style.marginLeft = "20%";
    tabla.style.width = "80 %";

    console.log(rescarros);
    const { carros } = rescarros;
    console.log(carros);


      const row2 = tabla.insertRow();
      const xcelda = row2.insertCell();
      xcelda.innerHTML = `<p>PLACA</p>`;
      const xcelda2= row2.insertCell();
      xcelda2.innerHTML=`<p>AÑO VEHICULO</p>`;
      const xcelda3= row2.insertCell();
      xcelda3.innerHTML=`<p>MODELO</p>`;
      const xcelda4= row2.insertCell();
      xcelda4.innerHTML=`<p>COMENTARIO</p>`;

    for ( const carro of carros )
    {
      const row = tabla.insertRow();
      const celda = row.insertCell();
      celda.innerHTML = `<button class="boton"  value='${carro.CARRO_PLACA}'>${carro.CARRO_PLACA} </button>`;
      const celda2= row.insertCell();
      celda2.innerHTML=`${carro.CARRO_AÑO}`
      const celda3= row.insertCell();
      celda3.innerHTML=`${carro.CARRO_MODELO}`;
      const celda4= row.insertCell();
      celda4.innerHTML=`${carro.CARRO_COMENTARIO}`;
      const celda5= row.insertCell();
      celda5.innerHTML=`<button class="botoneliminar" value='${carro.CARRO_PLACA}'>ELIMINAR </button>`;

    }
  /* ||||||||||||||||||||||||||| FIN CONSULTA GENERAL ||||||||||||||||||||||||||| */

/* ---------------------- CONSULTA ESPECIFICA ---------------------- */
  cuerpo.innerHTML=``;
  cuerpo.appendChild(tabla);
 
  document.querySelectorAll('.boton').forEach( (ele : Element )  =>{

     ele.addEventListener('click',async ()=>
    { 
      const idcarro = (ele as HTMLButtonElement ).value;
     /* console.log(idcarro); */
      const {data} = await httpAxios.get<ICarros>(`carros/${idcarro}`)
      console.log(data)

      carro_placa.value = data.CARRO_PLACA;
      carro_modelo.value = data.CARRO_MODELO;
      carro_aÑo.value = data.CARRO_AÑO?.toString() || 'Indefinida';
      carro_comentario.value = data.CARRO_COMENTARIO;
      estado.value = data.Estado!.toString();
      id.value = data._id!
    })

  })
/* ||||||||||||||||||||||||||| FIN CONSULTA ESPECIFICA ||||||||||||||||||||||||||| */

  /* ---------------------- ELIMINAR  ---------------------- */

  document.querySelectorAll('.botoneliminar').forEach( (ele2 : Element )  =>{

    ele2.addEventListener('click',async ()=>
   { 
     const idcarro = (ele2 as HTMLButtonElement ).value;
     console.log(idcarro);
     const {data} = await httpAxios.delete<ICarros>(`carros/${idcarro}`)
     const eliminado = data
     console.log(data);
     console.log(`Estancia eliminada => ${eliminado.CARRO_PLACA}`);
     swal(`Listo!`, `Eliminado ${eliminado.CARRO_PLACA}!`, `success`);

     /* ||||||||||||||||||||||||||| FIN ELIMINAR  ||||||||||||||||||||||||||| */
   })

 })
  
})

/* |||||||||||||||||||||||||||||||||||||| FIN APIS CONSULTA GENERAL , ESPECIFICA Y ELIMINAR |||||||||||||||||||||||||||||||||||||||| */

const asignarvalores =  ( ) => {
  const data:ICarros = {
    CARRO_PLACA: carro_placa.value,
    CARRO_MODELO: carro_modelo.value,
    CARRO_AÑO:  Number( carro_aÑo.value),
    CARRO_COMENTARIO: carro_comentario.value,
  }
  return data;
}
grabar.addEventListener('click', async ()=>{
  const data =  asignarvalores()
    /* ---------------------- MODIFICACION DE DATOS  ---------------------- */
    if ( id.value.trim().length>0 )
    { 
      const rescarros:ICarros = await (await httpAxios.put<ICarros>(`carros/${carro_placa.value}`,data )).data
      console.log(`El carro ${rescarros.CARRO_PLACA} fue modificado con éxito`);
      swal(`Listo!`, `El carro ${rescarros.CARRO_PLACA} fue modificado con éxito`, `info`);
    }
    /* ||||||||||||||||||||||||||| FIN MODIFICAR  ||||||||||||||||||||||||||| */

  /* ---------------------- CREAR DATOS  ---------------------- */
    if (id.value.trim().length === 0) {

    if(carro_placa.value.length === 0) { 
      try {
      swal(`CORREGIR!`, `El PLACA CARRO ES OBLIGATORIA`, `warning`);
      }catch (e) { swal(`CORREGIR!`, ` El PLACA CARRO ES OBLIGATORIA`, `warning`);}
    }
    else{
      if( carro_placa.value === data.CARRO_PLACA.toString() )
      {
        /* swal(`CORREGIR!`, `El CARRO YA EXISTE`, `warning`); */
        swal({
          title: "ERROR DE DATOS!",
          text: "Placa ya existe, Desea reactivar el registro anterior?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then(async (willDelete) => {
          if (willDelete) {
            try 
            {
              const recovery = carro_placa.value;
              (await httpAxios.delete<ICarros>(`carros/recuperar/${recovery}`))
            } 
            catch (error) 
            {
              swal(`Se Presento un Error!`, `Error :(`, `error`);        
            }
            swal("RECUPERADO CON EXITO", {icon: "success",});  

          } else {
            swal("EL ARCHIVO SIGUE DESHABILITADO");
          }
        });
        
      }
      else{
            try 
            {
            const rescarros:ICarros =  await (await httpAxios.post<ICarros>(`carros`,data)).data
            console.log(`El carro ${rescarros.CARRO_PLACA} fue insertado con éxito`);
            swal(`Listo!`, `El carro ${rescarros.CARRO_PLACA} fue insertado con éxito`, `success`);
            } 
            catch (error) 
            {
              if (axios.isAxiosError(error))
              {
                console.log(`Error en axios :(`);     
              }
              console.log(error);
              swal(`Se Presento un Error!`, `Error :(`, `error`);        
            }
       }
      
      /* return */
    }
  /* ||||||||||||||||||||||||||| FIN CREAR  ||||||||||||||||||||||||||| */
  }


})

/* -------------------------------- COMIENZO API ELIMINAR -------------------------------- */

/* eliminar.addEventListener('click', async () => {

  document.querySelectorAll('.boton').forEach( (ele2 : Element )  =>{

    ele2.addEventListener('click',async ()=>
   { 
     const idcarro = (ele2 as HTMLButtonElement ).value;
     console.log(idcarro);
     const {data} = await httpAxios.delete<ICarros>(`carros/${idcarro}`)
     const eliminado = data
     console.log(data);
     console.log(`Estancia eliminada => ${eliminado.CARRO_PLACA}`);

   })

 })


}) */