let input = document.querySelector(".input");
let NoinputBtn = document.querySelectorAll(".NoinputBtn");
let ExinputBtn = document.querySelectorAll(".ExinputBtn");
let calculateBtn = document.querySelector(".calculateBtn");
let output = document.querySelector(".output");
let clearOutputBtn = document.querySelector(".clearOutputBtn");

let inputArr = [];
let finalInput;
NoinputBtn.forEach((item) => {
  item.addEventListener("click", () => {
    inputArr.push(item.innerText);
    input.value += item.innerText;
  });
});

ExinputBtn.forEach((item) => {
  item.addEventListener("click", () => {
    inputArr.push(item.innerText);
    input.value += item.innerText;
  });
});
const checkNewArr = () => {
  for (let i = 0; i < inputArr.length; i = i + 2) {
    if (
      inputArr[i] == "+" ||
      inputArr[i] == "-" ||
      inputArr[i] == "*" ||
      inputArr[i] == "/"
    ) {
      alert("check input");
      location.reload();
    } else {
      continue;
    }
  }
};
const validateInput = () => {
  let ffirstInput = inputArr[0];
  let length = inputArr.length - 1;
  let lastInput = inputArr[length];
  if (ffirstInput == "*" || ffirstInput == "/") {
    alert("input should start with number");
  } else if (
    lastInput == "+" ||
    lastInput == "-" ||
    lastInput == "*" ||
    lastInput == "/"
  ) {
    alert("input should end with number");
  } else {
    finalInput = inputArr.join("");
  }
};
calculateBtn.addEventListener("click", () => {
  checkNewArr();
  validateInput();
  output.innerText = eval(finalInput);
  input.value = "";
  inputArr = [];
});
clearOutputBtn.addEventListener("click", () => {
  output.innerText = 0;
});
