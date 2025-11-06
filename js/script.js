const tasklist = document.getElementById("tasklist")
const taskinput = document.getElementById("taskinput")

// FUNÇÕES
function addTask() {
  const taskText = taskinput.value.trim();
  if (taskText !== ""){

    const MaxText = taskText.substring(0,25);

    const li = document.createElement("li")
    li.innerHTML = `
      <span>${MaxText}</span>
      <button class="editBtn" onClick="editTask(this)">Editar</button> 
      <button class="removeBtn" onClick="delTask(this)">Remover</button>
    `
    tasklist.appendChild(li)
    taskinput.value = ""
  }
}

function editTask(button) {
  const li = button.parentElement;
  const span = li.querySelector("span");
  const newText = prompt("Editar tarefa:", span.textContent);
  if (newText !== null  && newText.trim() !== "" ){
    span.textContent = newText.trim();
  };
}

function delTask(button) {
  const li = button.parentElement;
  tasklist.removeChild(li)
}