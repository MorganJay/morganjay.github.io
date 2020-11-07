//Cacheing selectors
const addButton = document.getElementById("enter");
const input = document.getElementById("userinput");
const ol = document.querySelector("ol");
const tasksNo = document.querySelector(".tasks");
const searchInput = document.querySelector(".search")
let todos = JSON.parse(localStorage.getItem("todos")) || [];
const date = document.querySelector(".date");
const doneTasks = JSON.parse(localStorage.getItem("donetodos"))||[];
// import Swal from 'sweetalert2';
// const Swal = require('sweetalert2');

if (todos) {
  todos.forEach((todo) => {
    if(doneTasks.includes(todo)){
      ol.innerHTML += `
      <div class="list-container">
          <li class="done">${todo}</li>
          <button type="button" class="delete">×</button>
      </div>`;
    }
    else{
      ol.innerHTML += `
      <div class="list-container">
          <li>${todo}</li>
          <button type="button" class="delete">×</button>
      </div>`;
    }           
  });
  numberTasks();
  const delButton = document.querySelectorAll(".delete");
  const li = document.querySelectorAll("li");
  li.forEach((list_item) => {
    list_item.addEventListener("click", crossItem);
  });
  delButton.forEach((delBtn) => {
    delBtn.addEventListener("click", delItem);
  });
}

function getDate() {
  // Get dates
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const dayName = days[d.getDay()];
  const monthName = monthNames[d.getMonth()];
  const day = (d.getDay() + 1);
  const year = d.getFullYear();
  date.textContent = `${dayName} ${day} ${monthName}, ${year}`;
}

function inputLength() {
  return input.value.length;
}

function numberTasks() {
  if (todos.length === 1) {
    tasksNo.textContent = `${todos.length} task`;
  } else if (todos.length >= 2) {
    tasksNo.textContent = `${todos.length} tasks`;
  } else {
    tasksNo.textContent = "";
  }
  return todos.length;
}

function storeTodos() {
  todos.unshift(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createListElement() {
  storeTodos();
  let div = document.createElement("div");
  div.classList.add("list-container");
  div.innerHTML = `<li>${input.value}</li>
  <button type="button" class="delete">×</button>`;
  ol.prepend(div);
  numberTasks();
  input.value = "";
  const li = div.firstElementChild;
  li.addEventListener("click", crossItem);
  const delBtn = div.querySelector(".delete");
  delBtn.addEventListener("click", delItem);
}

function crossItem(e) {
  const list_item = e.currentTarget;
  let listText = list_item.textContent;
  if (list_item.classList.contains("done")) {
    list_item.classList.remove("done");
    let index = doneTasks.indexOf(listText);
    doneTasks.splice(index, 1);
    localStorage.setItem("donetodos", JSON.stringify(doneTasks));
  } else {
    list_item.classList.add("done");
    doneTasks.push(listText);
    localStorage.setItem("donetodos", JSON.stringify(doneTasks));
    Swal.fire('Good job!','Task completed','success');
    document.querySelector('body').classList.add("fullheight");
  }
}

function delItem(e) {
  const listItem = e.path[1];
  const listItemContent = listItem.children[0].innerHTML;
  const index = todos.indexOf(listItemContent);
  ol.removeChild(listItem);
  todos.splice(index, 1);
  numberTasks();
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addListAfterCLick() {
  if (inputLength() > 0) {
    createListElement();
  } else {
    alert("Please enter an item");
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function searchTodos(e){
  const input = e.target.value.toLowerCase();
  Array.from(todos).forEach((todo) => {
      if (todo.toLowerCase().indexOf(input) != -1) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
  });
}

document.addEventListener("DOMContentLoaded", getDate);
addButton.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListAfterKeypress);
searchInput.addEventListener('keyup', searchTodos);