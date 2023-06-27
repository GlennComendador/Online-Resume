"use strict";

//HAMBURGER MENU VARIABLE DECLARATIONS
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

//DARK / LIGHT MODE VARIABLE DECLARATIONS
const darkLight = document.querySelector(".dark-light");
const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");

//HAMBURGER MENU TOGGLE FUNCTION
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    //Hide Close Icon
    closeIcon.style.display = "none";
    //Show Menu Icon
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    //Show Close Icon
    closeIcon.style.display = "block";
    //Hide Hamburger Menu Icon
    menuIcon.style.display = "none";
  }
}

//DARK / LIGHT MODE TOGGLE FUNCTION
// function toggleDarkLight() {}

closeIcon.style.display = "none";
hamburger.addEventListener("click", toggleMenu);

// darkLight.addEventListener("click", toggleDarkLight);

//CLOSE HAMBURGER MENU ONCE LIST ITEM CLICKED
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
