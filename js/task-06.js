const textInputEl = document.querySelector("#validation-input");
console.log(textInputEl);

textInputEl.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = event.currentTarget.dataset.length;

  this.classList.add('invalid');
  this.classList.remove('valid');

  if (valueLength == requiredLength) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
}