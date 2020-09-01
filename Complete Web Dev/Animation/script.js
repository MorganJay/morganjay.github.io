const heading = document.querySelector("h1");
heading.addEventListener("animationend", () => {
  const paragraph = document.querySelector("p");
  paragraph.classList.add("animate__animated", "animate__heartBeat");
});
const paragraph = document.querySelector("p");
paragraph.addEventListener("animationend", () => {
  const hyperlink = document.getElementById("link");
hyperlink.style.setProperty("--animate-duration", "2s");
  hyperlink.classList.add("animate__animated", "animate__bounceInDown");
})

//or change its duration:
// const element = document.querySelector(".my-element");
// element.style.setProperty("--animate-duration", "0.5s");
