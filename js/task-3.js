const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInput); 

function handleInput(event) {
  const name = event.target.value.trim();
  if (name === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = name;
  }
};




