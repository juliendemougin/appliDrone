var nav = document.getElementById("nav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  nav.classList.add("nav__active");
}

function closeNav() {
  nav.classList.remove("nav__active");
}