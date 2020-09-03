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
