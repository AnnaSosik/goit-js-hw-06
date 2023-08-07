const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const anonymousValue = "Anonymous";

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = anonymousValue;
  }
});
