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
//Objetos
const listaCalifas ={
  calificacionHist : 9,
  calificacionCien: 8,
  calificacionEco:10
}

console.log(nombreEstudiante + " obtuvo un " + calificacionMate + " en la asignatura de Matematicas")
console.log(nombreEstudiante + " obtuvo un " + calificacionEsp + " en la asigmatura de Español")
console.log(nombreEstudiante + " obtuvo un " + calificacionIng + " en la asignatura de Ingles")
console.log(nombreEstudiante + " obtuvo un " + calificacionGeo + " en la asignatura de Geografia")
console.log(nombreEstudiante + " obtuvo un " + listaCalifas.calificacionHist + " en la asignatura de Historia")
console.log(nombreEstudiante + " obtuvo un " + listaCalifas.calificacionCien + " en la asignatura de Ciencias")
console.log(nombreEstudiante + " obtuvo un " + listaCalifas.calificacionEco + " en la Asigntarua de Economia" )

//Arreglos
const califasDeLeo = [
  {
    nombre: "Leonel",
    calificacionMate1: 8,
    calificacionEsp1: 9,
    calificacionIng1: 10,
    calificacionGeo1: 8,
    calificacionHist1: 9,
    calificacionCien1: 10,
    calificacionEco1: 10
  }
]

const calisLeo = califasDeLeo;

console.table(calisLeo)

const sumaCalisLeo = calisLeo.calificacionMate1 + calisLeo.calificacionEsp1 + calisLeo.calificacionIng1 + calisLeo.calificacionGeo1 + calisLeo.calificacionHist1 + calisLeo.calificacionCien1 + calisLeo.calificacionEco1;

const numeroCalisLeo = Number(sumaCalisLeo)

console.log(numeroCalisLeo)

const promedioLeo = sumaCalisLeo / califasDeLeo.length;

console.log("El promedio de " + califasDeLeo.nombre + " es de :" + promedioLeo)


