"use strict";

const header = document.querySelector("header");

window.addEventListener("scroll", function (e) {
  header.classList.toggle("sticky-head", window.scrollY > 0);
});
