import './style.css'
import axios from 'axios';
import swal from 'sweetalert';
/* import { ICarros, IResCarros } from './interfaces/ICarros'; */
import {consultaCarros, guardarCarros } from './controllers/carros'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CARROS</h1>
`;

/* 

const etiqueta = document.createElement("label")
etiqueta.textContent=`ID`

const input = document.createElement("input")

input.id = "id";

etiqueta.htmlFor = "id";

app.appendChild(etiqueta);
app.appendChild(input);
 */

app.innerHTML += `
<br><br>
<label for='id' >ID </label><input readonly="readonly" type="text" id='id' /><br><br>
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
/* -------------- BOTONES -------------------------------- */
const id = document.querySelector<HTMLInputElement>('#id')!
const carro_placa = document.querySelector<HTMLInputElement>('#CARRO_PLACA')!
const carro_modelo = document.querySelector<HTMLInputElement>('#CARRO_MODELO')!
const carro_aÑo = document.querySelector<HTMLInputElement>('#CARRO_AÑO')!
const carro_comentario = document.querySelector<HTMLInputElement>('#CARRO_COMENTARIO')!
const estado = document.querySelector<HTMLInputElement>('#Estado')!

/* -------------- BOTONES FUNCIONES CRUD -------------------------------- */
const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar = document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

/* ---------------------------------------------------------------- */
export {id, carro_placa, carro_modelo, carro_aÑo, carro_comentario, estado, cuerpo,}
/* ---------------------------------------------------------------- */
/* -------------- FUNCION LIMPIAR CELDAS -------------------------------- */

nuevo.addEventListener('click', () =>{
  id.value=""
  estado.value=""
  carro_placa.value=""
  carro_modelo.value=""
  carro_aÑo.value=""
  carro_comentario.value=""

})
/* **********************************FIN FUNCION LIMPIAR CELDAS ********************************** */

/* ---------------------- INICIO API CONSULTA GENERAL , ESPECIFICA Y ELIMINAR---------------------- */
consultar.addEventListener('click', async ()=>{
  consultaCarros();
})

/* -------------- INICIO API GUARDAR DATOS -------------------------------- */
grabar.addEventListener('click', async ()=>{
  guardarCarros();

})
/* ********************************** FIN API GUARDAR DATOS********************************** */


