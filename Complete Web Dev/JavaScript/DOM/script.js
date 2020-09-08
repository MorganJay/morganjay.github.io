var listbutton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var delButton = document.getElementsByClassName("delete");
var li = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var button = document.createElement("button");
  button.innerText = "×";
  button.classList.add("delete");
  li.appendChild(button);
  console.log(li);
  ol.appendChild(li);
  input.value = "";
}

function addListAfterCLick() {
  if (inputLength() > 0) {
    createListElement();
  } 
  else {
    alert("enter an item pls");
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// function listItemisDone() {
//   li.classList.toggle("done");
// }

 function deleteListitem() {
   for (var i = 0; i < delButton.length;  i++) {
     delButton[i].addEventListener("click", function(e)
     {
        e.target.parentElement.parentElement.remove();
     });
   }
 }

listbutton.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListAfterKeypress);

//li.forEach((li) => li.addEventListener("click", listItemisDone));
