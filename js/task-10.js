const inputEl = document.querySelector("#controls input");
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');


createEl.addEventListener('click', getAmount);
destroyEl.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = inputEl.value;
  createBoxes(amount);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let basicSize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    
    let createDivEl = document.createElement("div");
    
    createDivEl.style.cssText = 
     `width: ${basicSize}px; 
      height: ${basicSize}px;
      background-color: ${getRandomHexColor()}`;
    
    basicSize += 10
    boxesEl.appendChild(createDivEl);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}