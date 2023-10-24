console.log("Simulador de calificaciones");

//Saludo mediante alert
//alert("Hola bienvenido al simulador de alta de calificaciones");

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
    calificaciones.forEach(calificacion => {
      const { estudiante, materia, califiacion} = calificaciones;

      const divCalis = document.createElement('div');
      divCalis.classList.add('calificacion', 'p-3');
      divCalis.dataset.calificacionId = calificacion.id;

      //Scripting de los elementos
      const estudianteParrafo = document.createElement('h2');
      estudianteParrafo.classList.add('card-title', 'font-weight-bolder');
      estudianteParrafo.innerHTML = `${estudiante}`;

      const materiaParrafo = document.createElement('p');
      materiaParrafo.innerHTML = `<span class="font-weight-bolder">Asignatura: </span> ${materia}`;

      const califiacionParrafo = document.createElement('p');
      califiacionParrafo.innerHTML = `<span class="font-weight-bolder">Calificacion: </span> ${califiacion}`;

      // Agregar un botón de eliminar...
      const btnEliminar = document.createElement('button');
      btnEliminar.onclick = () => borrarCalis(calificacion.id); // añade la opción de eliminar
      btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
      btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'      


      //Agregar HTML
      divCalis.appendChild(estudianteParrafo);
      divCalis.appendChild(materiaParrafo);
      divCalis.appendChild(califiacionParrafo);
      divCalis.appendChild(btnEliminar);

      listarCalifas.appendChild(divCalis);
    });
  }
  sincronizarStorage();
}

//Eliminar califiaciones del DOM
function borrarCalis(e) {
  e.preventDefault();

  const id = e.target.parentElement.dataset.calificacionId;
  calificaciones = calificaciones.filter((calificacion) => calificacion.id != id);
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

