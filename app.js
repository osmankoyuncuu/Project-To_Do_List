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

//? del Event Handler

listDom.addEventListener("click", (event) => {
  event.preventDefault();
  const item = event.target;
  if (item.classList[0] == "fa-solid") {
    const delParent = item.parentElement;
    delParent.classList.add("delete");
    delParent.addEventListener("transitionend", () => {
      delParent.remove();
    });
  }
  if (item.classList[0] === "fa-regular") {
    //  <i class="fa-regular fa-circle"></i>;
    //  <i class="fa-regular fa-circle-check"></i>
    const checkIn = document.getElementsByClassName("fa-regular");
    const checkParent = item.parentElement;
    checkParent.classList.toggle("complete");
    console.log(checkIn[0]);
    // if (checkIn.classList) {
    //   checkIn.classList.remove("fa-circle");
    //   checkIn.classList.add("fa-circle-check");
    // } else {
    //   checkIn.classList.add("fa-circle");
    //   checkIn.classList.remove("fa-circle-check");
    // }
  }
});
