const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const anonymousValue = 'Anonymous';

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value) {
        textOutput.textContent = event.currentTarget.value;
    } else {
        textOutput.textContent = anonymousValue;
    }
});