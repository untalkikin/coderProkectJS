console.log("Simulador de calificaciones");

//Saludo mediante alert
alert("Hola bienvenido al simulador de alta de calificaciones")

//Se declara el nombre del estudiante
let nombreEstudiante = prompt("Ingresa el nombre del estudiante")



//Se declaran las variables
let calificacionMate = parseInt(prompt("Ingresa la calificacion de matematicas"));
let calificacionEsp = parseInt(prompt("Ingresa la calificacion de Español"));
let calificacionIng = parseInt(prompt("Ingresa la calificacion de Ingles"));
let calificacionGeo = parseInt(prompt("Ingresa la calificacion de Geografia"));


var sumaCalifas = calificacionEsp + calificacionMate + calificacionIng + calificacionGeo;
console.log(sumaCalifas);

var promedio = sumaCalifas / 4;

console.log(promedio)

function acreditaSemestre (){
    if (promedio <= 5){
        alert("No acredita, el promedio es de: " + promedio);
    }else{
        alert("Acredita la el semestre, el promedio es de: " + promedio);
    };
};


document.write("El estdudiante "+ nombreEstudiante + ", tiene un promedio de: " + promedio);

while(promedio >= 9){
  alert("Es un estudiantede excelentcia");
  if(promedio < 9){
    break;
  }
  break;
}

