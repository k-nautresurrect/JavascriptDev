console.log("hello world");

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth + "\t" + window.innerHeight);
// });

console.log(document);

const navbar = document.createElement("header");
navbar.innerHTML = `<nav>
    <ul>
      <li class="logo">logo</li>
    </ul>
  </nav>`;
document.body.append(navbar);

const logo = document.getElementsByClassName("logo");

const logoArray = Array.from(logo);
console.log(logo);
console.log(logoArray);
logoArray[0].style.color = "green";

// query selector
const atribute = document.querySelector("[data-text-input]");

atribute.style.backgroundColor = "grey";
console.log(atribute);

const btn = document.querySelector("[data-btn]");
console.log(btn);

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
});

// counter app
let count = 0;
const divbtn = document.querySelectorAll("div > button");

console.log(divbtn);
divbtn.forEach((button) => {
  button.addEventListener("click", () => {
    count = parseInt(button.innerHTML);
    button.innerHTML = count + 1;
  });
});

// todolist
// 1. select all elements
// 2. when i submit the form add a new element
const formTD = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

formTD.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");
  //add item
  list.appendChild(item);
  input.value = "";
  //create a new item
  // clear input
  // setup event listnr to delete the item
  item.addEventListener("click", () => {
    item.remove();
  });
  //   console.log(input.value);
});
