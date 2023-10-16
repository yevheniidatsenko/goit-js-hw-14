document.getElementById("name-input").addEventListener("input", function () {
  const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
