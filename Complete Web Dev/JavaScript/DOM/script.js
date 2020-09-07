// //change all the HTML elements in the page
// //change all the HTML attributes in the page
// //change all the CSS styles in the page
// //remove existing HTML elements and attributes
// //add new HTML elements and attributes
// //JavaScript can react to all existing HTML events in the page
// //JavaScript can create new HTML events in the page
// DOM Selectors
// --------------
// getElementsByTagName
// getElementsByClassName
// getElementById

// querySelector
// querySelectorAll

// getAttribute
// setAttribute

// ##Changing Styles
// style.{property} //ok

// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// document.querySelectorAll("li")[1].parentElement;
// children

// ##It is important to CACHE selectors in variables
//  var h1 = document.querySelector("h1");

//  var button = document.getElementsByTagName("button")[0];

//  button.addEventListener("click", function(){
//      console.log("CLICKK");
//  });

//  button.addEventListener("mouseleave", function(){
//      console.log("mouse has been left");
//  })

var listbutton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delButton = document.getElementsByTagName("button");
var li = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.classList.add("listItem");
  li.appendChild(document.createTextNode(input.value));
  var button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("delete");
  console.log("button created");
  li.appendChild(button);
  console.log(li);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterCLick() {
  if (inputLength() > 0) {
    createListElement();
  }
  else{ console.log("enter an item pls");}
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function listItemisDone() { 
   li.classList.toggle("done");
}


listbutton.addEventListener("click", addListAfterCLick);
input.addEventListener("keypress", addListAfterKeypress);

//
li.forEach((li) =>
  li.addEventListener("click", listItemisDone));

