//*Selector
const inputDom = document.querySelector("#input");
const buttonDom = document.querySelector("#btn");
const listDom = document.querySelector("#list");

const newUl = document.createElement("ul");
listDom.appendChild(newUl);

//? addbtn event handler
/* <i class="fa-sharp fa-solid fa-circle-check"></i>; */
buttonDom.addEventListener("click", () => {
  newUl.innerHTML += `
  <li> <i class="fa-regular fa-circle"></i> ${inputDom.value}<i class="fa-solid fa-trash"></i> </li>`;
});

//? keydown event handler
inputDom.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    buttonDom.click();
  }
});
