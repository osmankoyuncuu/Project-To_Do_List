//*Selector
const inputDom = document.querySelector("#input");
const buttonDom = document.querySelector("#btn");
const listDom = document.querySelector("#list");

const newUl = document.createElement("ul");
listDom.appendChild(newUl);

//? addbtn event handler

buttonDom.addEventListener("click", () => {
  newUl.innerHTML += `
  <li>${inputDom.value} <button>X</button></li>`;
});

//? keydown event handler
inputDom.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    buttonDom.click();
  }
});
