"use strict";

// getting elements
const header = document.querySelector("header");
const timerCounts = document.querySelectorAll(".count");
const menuOpener = document.querySelector(".menu-opener");
const hamburgerLines = document.querySelectorAll(".line");
const mobileNavigation = document.querySelector(".mobile-navigation");

// timer deadline
const deadline = new Date("Sept 22, 2022").getTime();

// timer interval
const timer = setInterval(function () {
  // current time
  const now = new Date().getTime();

  // remaining time till deadline
  const remainingTime = deadline - now;
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // showing the timer in dom
  [days, hours, minutes, seconds].forEach(function (time, index) {
    // checking if the time is a single number by turning it into a string first then checking its length! :D
    let modifiedTime = (time + "").length > 1 ? time : `0${time}`;
    timerCounts[index].innerText = modifiedTime;
  });
}, 1000);

// mobile navigation opening
menuOpener.addEventListener("click", function (e) {
  mobileNavigation.classList.toggle("mobile-navigation-active");
  hamburgerLines.forEach(function (line, index) {
    switch (index) {
      case 0:
        line.classList.toggle("line-top-clicked");
        break;
      case 1:
        line.classList.toggle("line-opacity-0");
        break;
      case 2:
        line.classList.toggle("line-bottom-clicked");
    }
  });
});

// making header sticky on scroll
window.addEventListener("scroll", function (e) {
  if (screen.availWidth > 980) {
    header.classList.toggle("sticky-head", window.scrollY > 0);
  }
});
