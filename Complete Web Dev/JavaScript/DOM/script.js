//cacheing selectors
var addbutton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var delButton = document.getElementsByClassName("delete");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var listnumber = ol.querySelectorAll("li");
  var index = 1;
  listnumber.forEach((li) => {
    li.appendChild(document.createTextNode(index + "." + "  " + input.value));
    index++;
  });
  var button = document.createElement("button");
  button.innerText = "×";
  button.classList.add("delete");
  li.appendChild(button);
  ol.appendChild(li);
  input.value = "";
}

function addListAfterCLick() {
  if (inputLength() > 0) {
    createListElement();
  } else {
    alert("enter an item pls");
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function listItemisDone() {
  // for (var i = 0; i < li.length;  i++) {
  //   li[i].addEventListener("click", function()
  //   {
  //     this.classList.toggle("done");
  //   });
  // }
  var li = document.querySelectorAll("li");
  li.forEach((li) => {
    li.classList.toggle("done");
  });
}

function deleteListitem() {
  var delButton = document.getElementsByClassName("delete");
  var li = document.querySelectorAll("li");
  for (var i = 0; i < li.length; i++) {
    delButton[i].addEventListener("click", function (e) {
      // var theList = this.parentElement;
      // theList.style.display = "none";
    });
  }
}

addbutton.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListAfterKeypress);
ol.addEventListener("click", listItemisDone);
