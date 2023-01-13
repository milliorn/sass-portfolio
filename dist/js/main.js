const hamburger = document.querySelector(".menu-btn__burger");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    menuNav.classList.add("open");
    nav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    menuNav.classList.remove("open");
    nav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}
