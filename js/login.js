//Variables del login
const $submit = document.getElementById("submit"),
  $password = document.getElementById("password"),
  $username = document.getElementById("username"),
  $visible = document.getElementById("visible");

//Se creao los eventlisteners de eventos para mostrar contrasena
document.addEventListener("change", (e) => {
  if (e.target === $visible) {
    if ($visible.checked === false) $password.type = "password";
    else $password.type = "text";
  }
});

//Se crea eventListener para login como validacion de datos correctos
document.addEventListener("click", (e) => {
  if (e.target === $submit) {
    if ($password.value !== "" && $username.value !== "") {
      e.preventDefault();
      window.location.href = "pages/index.html";
    }
  }
});
