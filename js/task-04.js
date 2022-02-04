let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

function onDecrementClick(){
    counterValue -= 1; 
    return value.textContent = counterValue;
};

function onIncrementClick(){
    counterValue += 1;
    return value.textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrementClick);
decrementBtn.addEventListener('click', onDecrementClick);

