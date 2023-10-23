console.log("Simulador de calificaciones");

//Saludo mediante alert
alert("Hola bienvenido al simulador de alta de calificaciones")

//Variables

const listarCalifas = document.querySelector('#listas-calis');
const formulario = document.querySelector('#formulario');
let calificaciones = [];

//Funciones de eventos
eventListeners();

function eventListeners(){
  //Cuando se envia el formuñlario
  formulario.addEventListener('submit', agregarCali);
  //Borrar calificacion
  listarCalifas.addEventListener('click', borrarCali);
  //Contenido cargado
  document.addEventListener('DOMContentLoaded', () =>{
    calis = JSON.parse( localStorage.getItem('calis') ) || []  ;
    console.log(calis);
    crearHTML();
  });
}

