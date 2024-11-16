function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  function createBoxes(amount) {
    const boxesContainer = document.getElementById("boxes");
    boxesContainer.innerHTML = "";
  
    let width = 30;
    let height = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
  
      width += 10;
      height += 10;
    }
  }
  
  function destroyBoxes() {
    const boxesContainer = document.getElementById("boxes");
    boxesContainer.innerHTML = "";
  }
  
  document.querySelector("[data-create]").addEventListener("click", function () {
    const amountInput = document.querySelector('input[type="number"]');
    const amount = parseInt(amountInput.value);
  
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      amountInput.value = "";
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });
  
  document
    .querySelector("[data-destroy]")
    .addEventListener("click", destroyBoxes);