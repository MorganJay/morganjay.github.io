function CheckDriverAge() {
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

function CheckDriverAge2(age) {
  if (age < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (age > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

//CheckDriverAge2(32);
// function sing(song)
// {
//     console.log(song);
// }

// sing("reeeee");
// sing("meeeee");

// function mutliply(a , b)
// {
//     return a * b;
// }

// alert(mutliply(6,8));

//Building Facebook
// var user1 = {
//   username: "morganjay",
//   password: "1234",
// };

 var database = [
   {  username: "morganjay", password: "1234" },
   {  username: "james", password: "0337" },
   {  username: "morgan", password: "1998" }
];

var newsFeed = [
  { username: "jogn", timeline: "Nigeria when!!" },
  { username: "rose", timeline: "COD anyone?" },
  { username: "joe", timeline: "Na God give me life" },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password)
{
    for (var i = 0; i < database.length; i++)
    {
        if(database[i].username == username && database[i].password == password)
        {
            return true;
        }
    }
    return false;
}

function signIn(username, password)
{
    if (isUserValid(username, password))
    {
        console.log(newsFeed);
    }
    else
    {
        alert("Sorry, wrong username or password");
    }
}

signIn(userNamePrompt, passwordPrompt);

//loops

var todos = ["learn", "eat", "sleep", "play", "repeat sequence"];

var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//   //todos[i] = todos[i] + "!";
//   //    todos.pop();
//   console.log(i);
// }

// function printTodos(todo)
// {
//      console.log(todo);
// }

// todos.forEach(printTodos);

// console.log(todos);

// var count = 0;
// while(count < 10)
// {
//     console.log(count);
//     count++;
// }

// var count2 = 10;
// do
// {
//     console.log(count2);
//     count2--;
// } while(count2 > 0);
