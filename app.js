//?Selector
const inputDom = document.querySelector("#input");
const buttonDom = document.querySelector("#button");
const listDom = document.querySelector("#list");
const filterDom = document.querySelector("#filter");
flag = true;

inputDom.focus();

//? button Event Handler
buttonDom.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputDom.value == 0) {
    inputDom.focus();
  } else {
    let inputUpper = `${inputDom.value[0].toLocaleUpperCase()}${inputDom.value.slice(
      1
    )}`;
    const paragrafDom = document.createElement("p");
    listDom.appendChild(paragrafDom);

    const check = document.createElement("i");
    check.classList.add("fa-regular", "fa-circle");
    paragrafDom.appendChild(check);

    const text = document.createElement("span");
    text.innerHTML = inputUpper;
    paragrafDom.appendChild(text);

    const del = document.createElement("i");
    del.classList.add("fa-solid", "fa-trash");
    paragrafDom.appendChild(del);

    inputDom.value = "";
    inputDom.focus();
  }
});

//? keydown Event Handler
inputDom.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    buttonDom.click();
  }
});

//? check and del Event Handler

listDom.addEventListener("click", (event) => {
  event.preventDefault();
  const item = event.target;
  if (item.classList == "fa-solid fa-trash") {
    const delParent = item.parentElement;
    delParent.classList.add("delete");
    delParent.addEventListener("transitionend", () => {
      delParent.remove();
    });
  }
  if (item.classList == "fa-regular fa-circle") {
    //  <i class="fa-regular fa-circle"></i>;
    //  <i class="fa-regular fa-circle-check"></i>
    item.classList.remove("fa-circle");
    item.classList.add("fa-circle-check");
    item.parentElement.classList.add("complete");
    console.log("check on");
    console.log(item.classList);
  } else if (item.classList == "fa-regular fa-circle-check") {
    item.classList.remove("fa-circle-check");
    item.classList.add("fa-circle");
    item.parentElement.classList.remove("complete");
    console.log("check out");
    console.log(item.classList);
  }
});

//? Fİlter

filterDom.addEventListener("click", (e) => {
  const todo = listDom.childNodes;
  todo.forEach((item) => {
    switch (e.target.value) {
      case "all":
        item.style.display = "flex";
        break;
      case "completed":
        if (item.classList.contains("complete")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!item.classList.contains("complete")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
    }
  });
});

//? clock and date
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const dayWord = document.querySelector("#dayWord");

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
const d = new Date().getDay();
const m = new Date().getMonth();
const y = new Date().getFullYear();

day.innerText = d;
month.innerText = m;
year.innerText = y;
dayWord.innerText = days[d];
