var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.querySelector(".btn");


// function displayGradient()
// {
//     let bodyColour;
//     bodyColour = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
//     css.textContent = bodyColour + ";";
//     body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
// }

function setGradient() 
{
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}

function randomColour()
{
    console.log(Math.floor(Math.random()*255)+1);
}

randombtn.addEventListener("click", randomColour);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
