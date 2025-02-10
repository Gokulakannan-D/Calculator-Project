let outputDisplay = document.querySelector(".outputDisplay");

function display(num) {
  if (outputDisplay.value === "Invalid Error") {
    outputDisplay.value = "";
    outputDisplay.style.fontSize = "50px";
    outputDisplay.style.textAlign = "end";
    outputDisplay.style.fontWeight = "normal";
  } else {
    outputDisplay.value += num;
  }
}
function calculate() {
  try {
    outputDisplay.value = eval(outputDisplay.value);
    if (outputDisplay.value === "undefined") {
      outputDisplay.value = "0";
    }
  } catch (error) {
    outputDisplay.value = "Invalid Error";
    outputDisplay.style.fontWeight = "bold";
    outputDisplay.style.fontSize = "18px";
    outputDisplay.style.textAlign = "center";
  }
}
function clearDisplay() {
  outputDisplay.value = "";
}
function del() {
  outputDisplay.value = outputDisplay.value.slice(0, -1);
}
document.addEventListener("keydown", function (event) {
  let key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    display(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    del();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

78;
