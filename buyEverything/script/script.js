"use strict";

// Getting all the Element needed
const itemForm = document.querySelector("#item-form");
const formInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const priorityInput = document.querySelector("#priority-input");
const filterByInput = document.querySelector("#filterBy-input");
const categoryInput = document.querySelector("#category-input");
// const addBtn = document.querySelector(".addBtn");

// element creating functions
function createIcon(className) {
  const icon = document.createElement("i");
  icon.setAttribute("class", className);
  return icon;
}

function createBtn(btnClassName, iconClassName) {
  const btn = document.createElement("button");
  btn.setAttribute("class", btnClassName);
  const icon = createIcon(iconClassName);

  btn.appendChild(icon);
  return btn;
}

// Handler functions
function addItem(e) {
  e.preventDefault();
  const item = formInput.value;
  // Validate Input
  if (item === "") {
    alert("Please add an item");
    return;
  }

  //   Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createBtn(
    "remove-item btn-link text-red",
    "fa-solid fa-xmark"
  );
  li.appendChild(button);
  itemList.appendChild(li);
}

// Adding Event listeners
itemForm.addEventListener("submit", addItem);
