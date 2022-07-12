import './style.css'
import axios from 'axios';
import { ICarros, IResCarros } from './interfaces/ICarros';

const app = document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = `
  <h1>CARROS</h1>
`;

const httpAxios = axios.create({
  baseURL: `http://localhost:2500/v1/sextoa/api/`
});

const etiqueta = document.createElement("label");
etiqueta.textContent=`ID`

const input = document.createElement("input");
input.id = "id";

etiqueta.htmlFor = "id";

app.appendChild(etiqueta);
app.appendChild(input);


app.innerHTML += `

<label for='CARRO_PLACA' >CarroPlaca</label><input id='CARRO_PLACA' />
<label for='CARRO_MODELO' >CarroModelo</label><input id='CARRO_MODELO' />
<label for='CARRO_AÑO' >CarroAño</label><input id='CARRO_AÑO' />
<label for='CARRO_COMENTARIO' >CarroComentario</label><input id='CARRO_COMENTARIO' />
<label for='Estado' >Estado</label><input id='Estado' />

<button id="grabar">Grabar</button>
<button id="nuevo">Nuevo</button>
<button id="consultar">Consultar</button>

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

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

nuevo.addEventListener('click', () =>{
  id.value=""
  estado.value=""
  carro_placa.value=""
  carro_modelo.value=""
  carro_aÑo.value=""
  carro_comentario.value=""
})

consultar.addEventListener('click', async ()=>{
    const rescarros:IResCarros = await (await httpAxios.get<IResCarros>('carros')).data;

    const tabla =  document.createElement('table');
    tabla.id="tabla"
    tabla.border="1"

    tabla.style.marginTop = "40px";
    tabla.style.marginLeft = "35%";

    console.log(rescarros);
    const { carros } = rescarros;
    console.log(carros);

    for ( const carro of carros )
    {
      const row = tabla.insertRow();
      const celda = row.insertCell();
      celda.innerHTML = `<button class="boton" value='${carro._id}'>${carro.CARRO_PLACA} </button>`;

      const celda2= row.insertCell();
      celda2.innerHTML=`${carro.CARRO_AÑO}`

    }

  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)
 
  document.querySelectorAll('.boton').forEach( (ele : Element )  =>{

     ele.addEventListener('click',async ()=>
    {
      const {data} = await httpAxios.get<ICarros>(`carros/${(ele as HTMLButtonElement).value}`)
      console.log(data)
      carro_placa.value = data.CARRO_PLACA;
      carro_modelo.value = data.CARRO_MODELO;
      carro_aÑo.value = data.CARRO_AÑO.toString();
      carro_comentario.value = data.CARRO_COMENTARIO;
      estado.value = data.Estado!.toString();
      id.value = data._id!
    })

  })


})

const asignarvalores = ( ) => {
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
  if ( id.value.trim().length>0 )
  {
   const rescarros:ICarros = await (await httpAxios.put<ICarros>(`carros/${id.value}`,data )).data
   console.log(`El carro ${rescarros.CARRO_PLACA} fue modificado con éxito`);
   return;
  }
  try {
   const rescarros:ICarros =  await (await httpAxios.post<ICarros>(`carros`,data)).data
   console.log(`El carro ${rescarros.CARRO_PLACA} fue insertado con éxito`);
  } catch (error) {
     if (axios.isAxiosError(error))
     {
       console.log(`Error en axios :(`);
       
     }
     console.log(error);
         
  }
  

})