const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const number = /^1?[- ]?(?:\([0-9]{3}\)|[0-9]{3})[- ]?[0-9]{3}[- ]?[0-9]{4}$/;

const regexList = [number];

const checkNum = (msg) => regexList.some((regex) => regex.test(msg));

check.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value == "") {
    alert("Please provide a phone number");
    return;
  }

  results.innerHTML += checkNum(input.value)
    ? `<p class="results-text" style="color: rgb(0, 71, 27);">Valid US number: ${input.value}</p>`
    : `<p class="results-text" style="color: rgb(77, 56, 0);">Invalid US number: ${input.value}</p>`;

  input.value = "";
});

clear.addEventListener("click", function (e) {
  e.preventDefault();

  results.innerHTML = "";
});
