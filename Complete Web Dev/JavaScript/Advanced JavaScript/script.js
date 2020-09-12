var fun = 5;

function fun() {
  console.log(fun);
}

//ternary operator
// condition ? expr1 : expr2

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automated_answer =
  "Your account # is " + (isUserValid(false) ? "1234" : "not available");

console.log(automated_answer);

//switch function
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encountered a monster";
      break;
    case "backward":
      whatHappens = "you encountered a ghost";
      break;
    case "down":
      whatHappens = "you encountered a river";
      break;
    default:
      whatHappens = "please enter a valid direction to go";
  }
}

function winBattle(bool) {
  return bool;
}
var experiencePoints = winBattle(true) ? "10" : "1";

function calculator(operation) {
  let a, b;
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default: 
    return "Invalid operation";
  }
}
