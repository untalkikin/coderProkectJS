console.log("Simulador de calificaciones");

//Saludo mediante alert
alert("Hola bienvenido al simulador de alta de calificaciones");

//Variables

const listarCalifas = document.querySelector("#lista-calis");
const formulario = document.querySelector("#formulario");
let calificaciones = [];

//Funciones de eventos
eventListeners();

function eventListeners() {
  //Cuando se envia el formuñlario
  formulario.addEventListener("submit", agregarCalis);
  //Borrar calificacion
  listarCalifas.addEventListener("click", borrarCalis);
  //Contenido cargado
  document.addEventListener("DOMContentLoaded", () => {
    calificaciones = JSON.parse(localStorage.getItem("calificaciones")) || [];
    console.log(calificaciones);
    crearHTML();
  });
}

//Añadir calificaciones a formulario
function agregarCalis(e) {
  e.preventDefault();
  //Leer el valor del textarea
  const estudiante = document.querySelector("#estudiante").value;
  const materia = document.querySelector("#materia").value;
  const calificacion = document.querySelector("#calificacion").value;

  //Validacion
  if (calificacion === "") {
    mostrarError("La calificacion no puede ir vacia");
    return;
  }

  const caliObj = {
    id: Date.now(),
    estudiante: estudiante,
    materia: materia,
    calificacion: calificacion,
  };
  //Spread operator
  calificaciones = [...calificaciones, caliObj];

  //Renderizado de de HTML
  crearHTML();

  //Reiniciar Formulario
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

function crearHTML() {
  limpiarHTML();

  if (calificaciones.length > 0) {
    calificaciones.forEach((califiaciones) => {
      //Crear boton de eliminar calificaciones
      const botonBorrar = document.createElement("a");
      botonBorrar.classList = "borrar-cal";
      botonBorrar.innerHTML = "X";

      //Crear elemento y contenido a la lista
      const li = document.createElement("li");

      //Añade el texto
      li.innerText = estudiante.estudiante;
      li.innerText = materia.materia;
      li.innerText = calificacion.calificacion;

      //Añader el boton de borrar  a la calificacion
      li.appendChild(botonBorrar);

      //Añade atributo unico
      li.dataset.calificacionesId = calificaciones.id;

      //Añade la calificacion a la lista
      listarCalifas.appendChild(li);
    });
  }
  sincronizarStorage();
}

//Eliminar califiaciones del DOM
function borrarCalis(e) {
  e.preventDefault();

  const id = e.target.parentElement.dataset.calisId;
  calificaciones = calificaciones.filter((calificaciones) => calificaciones.id != id);
  crearHTML();
}
  //Agregar Calificaciones a localStorage
function sincronizarStorage() {
  localStorage.setItem("calificaciones", JSON.stringify(calificaciones));
}

  //Eliminar Calificvaciones del dom
function limpiarHTML() {
  while (listarCalifas.firstChild) {
    listarCalifas.removeChild(listarCalifas.firstChild);
  }
}

