//Cacheing selectors
var addbutton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var delButton = document.querySelectorAll(".delete");
var li = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.innerHTML = ` <p class="title">${input.value}</p> 
         <div class="button-container">
             <button type="button" class="delete">×</button>
         </div>`;
  ol.appendChild(li);
  input.value = "";
  const list_item = li.querySelector(".title");
  list_item.addEventListener("click", crossItem);
  const delBtn = li.querySelector(".delete");
  delBtn.addEventListener("click", delItem);
}

function crossItem(e)
{
    const list_item = e.currentTarget.parentElement;
    list_item.classList.toggle("done");
}

function delItem(e) {
    const listitem = e.currentTarget.parentElement.parentElement;
    ol.removeChild(listitem);
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

addbutton.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListAfterKeypress);
li.forEach((list_item) => {
    list_item.addEventListener("click", crossItem);
});
delButton.forEach((delBtn) => {
  delBtn.addEventListener("click", delItem);
});


