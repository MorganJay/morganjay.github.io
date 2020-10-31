const heading = document.querySelector("h1");
const paragraph = document.querySelector(".welcome");

heading.addEventListener("animationend", () => {
  paragraph.classList.add("animate__animated", "animate__heartBeat");
});

paragraph.addEventListener("animationend", () => {
  const hyperlink = document.getElementById("link");
  hyperlink.style.setProperty("--animate-duration", "2s");
  hyperlink.classList.add("animate__animated", "animate__bounceInDown");
});

function displayMonth() {
  const date = new Date();
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  paragraph.innerHTML = `Welcome to ${month} <br> God bless you!!`;
}

displayMonth();
//or change its duration:
// const element = document.querySelector(".my-element");
// element.style.setProperty("--animate-duration", "0.5s");
