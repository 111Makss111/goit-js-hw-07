function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  divBoxes.innerHTML = ''; 
  const fragment = document.createDocumentFragment(); 

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(newBox); 
    size += 10;
  }

  divBoxes.appendChild(fragment); 
}

const inputElement = document.querySelector('input[type="number"]');
const divBoxes = document.querySelector('#boxes');
const clickCreate = document.querySelector('[data-create]');
const clickDestroy = document.querySelector('[data-destroy]');

clickCreate.addEventListener('click', () => {
  const amount = parseInt(inputElement.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = '';
  }
});

clickDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = ''; 
});








