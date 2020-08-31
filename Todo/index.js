const tbodyTasks = (e) => {
  const { classList } = e.target;
  if (classList.contains("check")) {
    checkTask(e);
  } else if (classList.contains("delete")) {
    delTask(e);
  }
};

const delTask = (e) => {
  e.target.parentElement.parentElement.remove();
  snAssign();
};

const checkTask = (e) => {
  e.target.parentElement.previousElementSibling.style.textDecoration = e.target
    .checked
    ? "line-through"
    : "none";
};

const addTask = (e) => {
  e.preventDefault();
  const title = addTaskInput.value;
  if (title !== "") {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <th>#</th>
        <td>${title}</th>
        <td><input type="checkbox" class="check" /></td>
        <td><button class="btn delete">&times;</button></td>
      `;
    tbody.append(newRow);
    addTaskInput.value = "";
    snAssign();
  }
};

const snAssign = () => {
  let tr = tbody.querySelectorAll("tr");
  let index = 1;
  tr.forEach((row) => {
    row.firstElementChild.textContent = index;
    index++;
  });
};

let tbody = document.querySelector("tbody");

tbody.addEventListener("click", tbodyTasks);

const addTaskInput = document.querySelector("#addTaskInput");
const addTaskForm = document.querySelector("#addTaskForm");

addTaskForm.addEventListener("submit", addTask);
