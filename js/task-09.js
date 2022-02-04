const bodyEl = document.getElementsByTagName('body')[0];
console.log(bodyEl)

const buttonEl = document.getElementsByTagName('body')[0];
console.log(buttonEl)

const colorEl = document.querySelector(".color");
console.log(colorEl );

buttonEl.addEventListener("click", getRandomHexColor);
function getRandomHexColor(event) {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = `${color}`;
  }
  




