const input = document.querySelector("#name");
const button = document.querySelector("#button");
const section = document.querySelector("#section");
const inputTwo = document.querySelector("#inputTwo");
const buttonTwo = document.querySelector("#buttonTwo");
const form = document.querySelector("#form");
const p = document.querySelector("p");

window.onload = iniciar;

function iniciar() {
  const buttonTwo = document.createElement("button", { type: "button" });
  buttonTwo.textContent = "Borrar";
  buttonTwo.id = "buttonTwo";
  buttonTwo.classList = "abajo";
  const inputTwo = document.createElement("input", { type: "Email" });
  inputTwo.id = "inputTwo";
  inputTwo.placeholder = "example123..";
  const label = document.createElement("label");
  label.textContent = "Email";
  section.appendChild(label);
  section.appendChild(inputTwo);
  section.appendChild(buttonTwo);
  buttonTwo.addEventListener("click", deleteName);
  showName(); //Cuando inicia la página se van a crear todos los elementos del ejercicio
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputTwo = document.querySelector("#inputTwo");
  //   const text = input.value;
  //   const textTwo = inputTwo.value;
  const datos = {};
  datos.name = input.value;
  datos.email = inputTwo.value;
  //   localStorage.setItem("name", text);
  //   localStorage.setItem("email", textTwo);

  localStorage.setItem("datos", JSON.stringify(datos));
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
  const p = document.createElement("p");
  const objeto = localStorage.getItem("datos");
  p.textContent = objeto;
  section.appendChild(p);

  if (!localStorage.getItem("datos")) {
    //Sí el valor de name no existe o es nulo. Salta alerta. (GuardClauses)
    alert("No hay ningun nombre almacenado ");
  }
}

// Función para borrar el nombre guardado en localStorage

function deleteName() {
  const p = document.querySelector("p");
  const inputTwo = document.querySelector("#inputTwo");
  if (localStorage.datos) {
    alert(`${localStorage.getItem("datos")} han sido borrado`);
    localStorage.removeItem("datos");
    input.value = " "; //Para dejar el input clear.
    inputTwo.value = "";
    p.remove();
  } else {
    alert("Nada que borrar");
  }
}
