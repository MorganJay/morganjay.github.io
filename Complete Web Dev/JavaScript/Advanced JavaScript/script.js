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
var experiencePoints = winBattle(true) ? 10 : 1;

function calculator() {
  a = prompt("enter a number");
  b = prompt("enter the second number");
  operation = prompt("operation?");
  switch (operation) {
    case "+":
      alert(a + b);
      return a + b;
    case "-":
      alert(a - b);
      return a - b;
    case "/":
      alert(a / b);
      return a / b;
    case "*":
      alert(a * b);
      return a * b;
    default:
      return "Invalid operation";
  }
}

//Destructuring
// const obj = {
//   players: "bobby", experience: 100,
//   wizardLevel: false
// };

// const players = obj.players;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

const { players, experience } = obj;
let { wizardLevel } = obj;

//Object properties
//const name = 'john snoe';

//  const object = {
//    [name]: 'simon',
//    [1+3]: 's'
//  };

let a = 3;
let b = "slally";
let c = {};

const objects = {
  a,
  b,
  c,
};

//  //template strings
//  let name = prompt("What's your name?");
//  const greeting = `Hello ${name}!`;
//  alert(greeting);

//defult arguments
const greeting = (name = "", age = 90, pet = "cat") => {
  `Hello ${name}! nice ${pet} for a ${age} year old😏`;
};

//arrow functions
const add = (a, b) => a + b;

//ADvanced Functions

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();
//currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => sum + 1;
compose(sum, sum)(5);

//Advanced arrays
const array = [1, 2, 3, 4, 5];
const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log(double);

//map, filter, reduce

const mapArray = array.map((num) => num * 2);
// const mapArray = array.map((num) => {
//   return num * 2;
// });
console.log(mapArray);

const filterArray = array.filter((num) => num > 5);

let stringArray = ["Hello", 4, 5, 2930];
const filterString = stringArray.filter((word) => word == "Hello");
// filterString
// (4) ["Hello", 4, 5, 2930]
stringArray.filter((greet) => greet == "Hello");

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

// let arrays = [1,2,3,4,5];
// const reduceArrays = arrays.reduce((accumulator, num) => {
// return accumulator + num;
// }, 0);

// reduceArrays
// 15

const arrayEx = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrayForeach = [];
array.forEach((user) => {
  arrayForeach.push(`${user.username}!`);
});
console.log("forEach", arrayForeach);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArrays = array.map((user) => `${user.username}?`);
console.log("map function", mapArray);

//Filter the array to only include users who are on team: red
const filterArrays = array.filter((user) => user.team == "red");
console.log(filterArray);

//Find out the total score of all users using reduce
const userTotalScore = array.reduce((acc, user) => user.score + acc, 0);

// (1), what is the value of i?
//index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArrayo = arrayNum.map((num, i) => num * 2);

// //const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// });

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answers = array.map(user=> {
  user.items = user.items.map(item => item + "!");
  return user;
});

const Answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});

//Advanced Object Concepts
//reference type, context, instantiation

var obj1 = { value: 10 };
var obj2 = obj1;
var object3 = { value: 10};

class Player {
  constructor(name, type)
  {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  introduce()
  {
    console.log(`Hi  I am ${this.name} of this ${this.type}`);
  }
}

class Wizard extends Player{
  constructor(name, type)
  {
   super(name, type);
   console.log('wizard', this);
  }

  play()
  { console.log(`WEEE I'm a ${this.type}`);}
}

const wizard1 = new Wizard('Shelly', "Healer");
const wizard2 = new Wizard("Brian","Dark Magic");


//#3 create two classes: an Animal class and a Mamal class. 
class Animal
{
    constructor(name, type, color)
    {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal
{
    constructor(name, type, color)
    {
        super(name, type, color)
    }
    sound()
    {
        console.log(`MOOOOOOO My name is ${this.name} and i am a ${this.type} look at my ${this.color} fur`);
    }
}
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
const cow = new Mammal('Gene', 'cow', 'red')
