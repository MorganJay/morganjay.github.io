var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.querySelector(".btn");

function displayGradient() {
  let bodyColour;
  bodyColour = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = bodyColour + ";";
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function setGradient() {
  let angle = Math.floor(Math.random() * 360);
  body.style.background = `linear-gradient(${angle}deg, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

function randomColour() {
  let angle = Math.floor(Math.random() * 360);
  let randomColor1 =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
  let randomColor2 =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
  color1.value = randomColor1;
  color2.value = randomColor2;
  body.style.background = `linear-gradient(${angle}deg, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
  console.log(angle, randomColor1, randomColor2);
}

displayGradient();
randombtn.addEventListener("click", randomColour);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
