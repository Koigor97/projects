"use strict";

// Getting all the Element needed
const itemForm = document.querySelector("#item-form");
const formInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

const priorityInput = document.querySelector("#priority-input");
const filterByInput = document.querySelector("#filterBy-input");
const categoryInput = document.querySelector("#category-input");

const filterInput = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear");

let editMode = false;
/////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////
// Handler functions

// check the UI for Items fucntion
function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    filterInput.classList.add("hideUI");
    clearBtn.classList.add("hideUI");
  } else {
    filterInput.classList.remove("hideUI");
    clearBtn.classList.remove("hideUI");
  }
}

// displaying all items from LocalStorage
function displayItems() {
  const itemsFromStorage = getItemFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

// addItem function
function addItem(e) {
  e.preventDefault();
  const item = formInput.value;
  // Validate Input
  if (item === "") {
    alert("Please add an item");
    return;
  }
  //   Create list item
  addItemToDOM(item);
  // add item to storage
  addItemToLocalStorage(item);
  formInput.value = "";
  //   checking the UI
  checkUI();
}

// adding Item to DOM
function addItemToDOM(item) {
  //   Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createBtn(
    "remove-item btn-link text-red",
    "fa-solid fa-xmark"
  );
  //   adding listItem to the DOM
  li.appendChild(button);
  itemList.appendChild(li);
}

// adding Item to Local Storage
function addItemToLocalStorage(item) {
  const itemsFromLocalStorage = getItemFromStorage();
  //   adding new item to the array
  itemsFromLocalStorage.push(item);
  // convert JSON to string to set Items
  localStorage.setItem("items", JSON.stringify(itemsFromLocalStorage));
}

// getting item from storage
function getItemFromStorage() {
  let itemsFromLocalStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromLocalStorage = [];
  } else {
    itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromLocalStorage;
}

// removing item from storage
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemFromStorage();
  // filtering out removed item
  itemsFromStorage = itemsFromStorage.filter((theitem) => theitem !== item);

  //  saving new filtered array
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

// handling different event
function onItemClick(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setEditItem(e.target);
  }
}

// edit Item function
function setEditItem(item) {
  editMode = true;
  item.classList.add("edit-mode");
}

// deleteItem function
function removeItem(item) {
  // remove item from DOM
  if (window.confirm("Do you want to delete this item")) {
    item.remove();
    // remove item from storage
    removeItemFromStorage(item.textContent);
    checkUI();
  }
}

// Filter function
function itemFilter(e) {
  const items = itemList.querySelectorAll("li");
  const filterText = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.indexOf(filterText) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// clearAllItems function
function clearAllItems(e) {
  if (window.confirm("Are you sure you want to clear all items")) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    // clear from localeStorage
    localStorage.removeItem("items");
    checkUI();
  }
}

////////////////////////////////////////////////////////////////////////
// initialize app
function init() {
  // Adding Event listeners
  itemForm.addEventListener("submit", addItem);
  itemList.addEventListener("click", onItemClick);
  filterInput.addEventListener("input", itemFilter);
  clearBtn.addEventListener("click", clearAllItems);
  document.addEventListener("DOMContentLoaded", displayItems);
  // calling the checkUI function
  checkUI();
}

init();
