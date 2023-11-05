//Validaciones antes de enviar

function validateForm() {
  let nombre = document.getElementById("nombre").value;
  let materia = document.getElementById("materia").value;
  let score = document.getElementById("score").value;

  if (nombre == "") {
    alert("Nombre no puede ir vacio");
    return false;
  }
  if (materia == "") {
    alert("Materia no puede ir vacia");
    return false;
  }
  if (score == "") {
    alert("Score no puede ir vacio");
    return false;
  } else if (score < 1) {
    alert("Score debe ser mayor que 0");
    return false;
  }
  return true;
}

function maestro() {
  // URL de la API
  const url = "https://rickandmortyapi.com/api/character";

  // Realizamos la petición HTTP
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Convertimos los datos en un array
      const characters = data.results;

      // Creamos un select
      const select = document.querySelector("select");

      // Recorremos el array de personajes
      characters.forEach((character) => {
        // Añadimos una opción al select
        const option = document.createElement("option");
        option.value = character.name;
        option.textContent = character.name;
        select.appendChild(option);
      });
    });
    return characters;
}

// Llamamos a la función
maestro();
//Mostrar datos desde localStorage
function showData() {
  let calificacionesList;
  if (localStorage.getItem("calificacionesList") == null) {
    calificacionesList = [];
  } else {
    calificacionesList = JSON.parse(localStorage.getItem("calificacionesList"));
  }

  let html = "";
  calificacionesList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.nombre + "</td>";
    html += "<td>" + element.materia + "</td>";
    html += "<td>" + element.score + "</td>";
    html += "<td>" + element.characters + "</td>" 
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Eliminar</button><button onclick="updateData(' +
      index +
      ')" class="btn btn-warning m-2">Editar</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}
//Cargando los datos del localStorage
document.onload = showData();

//Agregar los datos al localStorage

function addData(characters) {

  //Si el formulario es valido
  if (validateForm() == true) {
    let nombre = document.getElementById("nombre").value;
    let materia = document.getElementById("materia").value;
    let score = document.getElementById("score").value;
    let characters = document.getElementById("characters").value;

    let calificacionesList;
    if (localStorage.getItem("calificacionesList") == null) {
      calificacionesList = [];
    } else {
      calificacionesList = JSON.parse(
        localStorage.getItem("calificacionesList")
      );
    }

    calificacionesList.push({
      nombre: nombre,
      materia: materia,
      score: score,
      characters: characters,
    });

    localStorage.setItem(
      "calificacionesList",
      JSON.stringify(calificacionesList)
    );
    showData();
    document.getElementById("nombre").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("score").value = "";
    document.getElementById("characters").value = "";
  }
}

//Funcion para eliminar datos de localStorage
function deleteData(index) {
  let calificacionesList;
  if (localStorage.getItem("calificacionesList") == null) {
    calificacionesList = [];
  } else {
    calificacionesList = JSON.parse(localStorage.getItem("calificacionesList"));
  }
  calificacionesList.splice(index, 1);
  localStorage.setItem(
    "calificacionesList",
    JSON.stringify(calificacionesList)
  );
  showData();
}

//Funcion para editar en localStorage
function updateData(index) {
  //El boton de actualizar se mostrara cuando se eliga la opcion de actualizar
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  let calificacionesList;
  if (localStorage.getItem("calificacionesList") == null) {
    calificacionesList = [];
  } else {
    calificacionesList = JSON.parse(localStorage.getItem("calificacionesList"));
  }
  document.getElementById("nombre").value = calificacionesList[index].nombre;
  document.getElementById("materia").value = calificacionesList[index].materia;
  document.getElementById("score").value = calificacionesList[index].score;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() == true) {
      calificacionesList[index].nombre =
        document.getElementById("nombre").value;
      calificacionesList[index].materia =
        document.getElementById("materia").value;
      calificacionesList[index].score = document.getElementById("score").value;

      localStorage.setItem(
        "calificacionesList",
        JSON.stringify(calificacionesList)
      );

      showData();

      document.getElementById("nombre").value = "";
      document.getElementById("materia").value = "";
      document.getElementById("score").value = "";
      //El boton de actualizar se mostrara cuando se eliga la opcion de actualizar
      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
}
