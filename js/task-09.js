const buttonEl = document.querySelector('.change-color');
console.log(buttonEl)

const colorEl = document.querySelector(".color");
console.log(colorEl );

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener("click", changeBackgroung);
function changeBackgroung(event) {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
  }
  




