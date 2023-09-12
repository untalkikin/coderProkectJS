function validarFormulario() {
    // Validar nombre
    var nombre = document.querySelector("input[name='nombre']").value;
    if (nombre === "") {
      alert("El nombre es obligatorio.");
      return false;
    }
  
    // Validar correo electrónico
    var correo = document.querySelector("input[name='correo']").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(correo)) {
      alert("El correo electrónico no es válido.");
      return false;
    }
  
    // Validar cantidad
    var cantidad = document.querySelector("input[name='cantidad']").value;
    if (cantidad <= 0) {
      alert("La cantidad debe ser mayor que cero.");
      return false;
    }
    
    return function(){
        return cantidad;
    };

    return true;
  }
  
  // Evento onclick del botón "Comprar"
  document.querySelector("input[type='submit']").onclick = function() {

    var functionAnon = validarFormulario();

    if (functionAnon()) {
      // Realizar la compra de tickets
      alert("Se han comprado " + functionAnon() + "  tickets.");
      console.log("Se han comprado " + functionAnon() + "  ticketes.");
    }
  };