//Variables

const button = document.querySelector("#button");
const buttonTwo = document.querySelector("#buttonTwo");
const input = document.querySelector("#input");
const form = document.querySelector("#form");
const ul = document.querySelector("#ul");
const taskList = [];
let id = 1;

/*---------------------------------------------------------------------------------------------------------*/

form.addEventListener("submit", handleSubmit);
//Función para agregar tareas
function handleSubmit(e) {
  e.preventDefault();
  const task = input.value; //Obtengo lo que escriben en el input
  const li = document.createElement("li");
  li.classList = "ul__item";
  const label = document.createElement("label");
  const inputCheckbox = document.createElement("input");

  inputCheckbox.type = "checkbox";
  inputCheckbox.textContent = "";
  inputCheckbox.id = "inputCheckbox";
  label.textContent = task;
  li.appendChild(inputCheckbox);
  li.appendChild(label);
  ul.appendChild(li);
  input.value = ""; // Para dejar en limpio el input cuando se haga el submit

  inputCheckbox.addEventListener("change", handleCheckTasku);
  //Change es el evento de que se cambie el marcado del checkbox. Cambia de marcado o a no marcado.

  // lista de tareas
  taskList.id = id++;
  taskList.title = task;
  taskList.completed = false;
  console.log(taskList);
  // console.log(taskList);
}

/*---------------------------------------------------------------------------------------------------------*/
//Función para marcar con el check a la tarea finalizada

// Esto se puede hacer con un global en css, da lo mismo tener una función que haga lo mismo que un css? preguntar
function handleCheckTasku(e) {
  e.preventDefault(); //Creo que no importa, marcar el check no hace hace ninguna accion,, preguntar
  const inputCheckboxUp = e.target; //El evento es que
  const label = inputCheckboxUp.nextElementSibling;

  // Esto se puede hacer con un global en css, da lo mismo tener una función que haga lo mismo que un css? preguntar
  if (inputCheckboxUp.checked) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }

  //función para devolver el true o false con el checkout
  if (inputCheckboxUp.checked) {
    taskList.completed = true;
  } else {
    taskList.completed = false;
  }
  console.log(taskList);
}

buttonTwo.addEventListener("click", handleDelete);
/*---------------------------------------------------------------------------------------------------------*/
//Funcion para borrar las tareas marcadas
function handleDelete(e) {
  const inputCheckboxUpOut = document.querySelectorAll("input:checked");
  //Se declara la variable de todos los inputs con el atributo checked
  //Para ser sincero me base en un video donde el instructor lo hacía con un forEach. Yo lo intente replicar con el for.
  let task;
  for (let i = 0; i < inputCheckboxUpOut.length; i++) {
    task = inputCheckboxUpOut[i];
    task.parentNode.remove();
  }
}
