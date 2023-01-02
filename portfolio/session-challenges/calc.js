let input_btn = document.querySelectorAll(".input-btn");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let sqroot = document.querySelector("#square-root");
let calc_screen = document.querySelector('input[type="text"]');
let calc_value = "";
let historylist = document.querySelector(".history-list");
let clear_history = document.querySelector("#clear-history");
let delete_btn = document.querySelector("#backspace");

let calc_history = JSON.parse(localStorage.getItem("calc_history")) || [];

clear_history.addEventListener("click", () => {
  localStorage.clear();
  calc_history = [];
  historylist.innerHTML = "";
});

delete_btn.addEventListener("click", () => {
  calc_value = calc_value.slice(0, -1);
  calc_screen.value = calc_value;
});

input_btn.forEach((element) => {
  element.addEventListener("click", () => {
    calc_value += element.value;
    calc_screen.value = calc_value;
  });
});

equals.addEventListener("click", () => {
  let result = eval(calc_value);
  calc_screen.value = result;
  calc_history.push(calc_value + " = " + result);
  calc_value = "";
  localStorage.setItem("calc_history", JSON.stringify(calc_history));
  getHistory();
});

clear.addEventListener("click", () => {
  calc_value = "";
  calc_screen.value = calc_value;
});

sqroot.addEventListener("click", () => {
  let result = Math.sqrt(calc_screen.value);
  calc_screen.value = result;
  calc_history.push(calc_value + " = " + result);
  calc_value = "";
  localStorage.setItem("calc_history", JSON.stringify(calc_history));
  getHistory();
});

let uniqueValues = [];
let listValues = [];

function getHistory() {
  calc_history.forEach((element) => {
    if (!uniqueValues.includes(element)) {
      uniqueValues.push(element);
    }
  });

  listValues.push(uniqueValues.slice(-1));
  if (calc_history) {
    listValues.forEach((element) => {
      let history = document.createElement("li");
      history.innerHTML = element;
      historylist.append(history);
    });
  }
  listValues = [];
}

function loadHistory() {
  if (calc_history) {
    calc_history.forEach((element) => {
      let history = document.createElement("li");
      history.innerHTML = element;
      historylist.append(history);
    });
  }
}