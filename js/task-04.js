let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateInterface();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateInterface();
});

function updateInterface() {
  valueSpan.textContent = counterValue;
}

updateInterface();
