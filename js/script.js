"use strict";

// getting elements
var header = document.getElementsByTagName("header")[0];
var timerCounts = document.getElementsByClassName("count");
var menuOpener = document.getElementsByClassName("menu-opener")[0];
var hamburgerLines = [...document.getElementsByClassName("line")];
var mobileNavigation = document.getElementsByClassName("mobile-navigation")[0];
var dropdownOpeners = [...document.getElementsByClassName("dropdown-opener")];
var mobileDropdowns = [
  ...document.getElementsByClassName("mobile-dropdown-nav"),
];

// timer deadline
var deadline = new Date("Sept 22, 2022").getTime();

// timer interval
var timer = setInterval(function () {
  // current time
  var now = new Date().getTime();

  // remaining time till deadline
  var remainingTime = deadline - now;
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // showing the timer in dom
  [days, hours, minutes, seconds].forEach(function (time, index) {
    // checking if the time is a single number by turning it into a string first then checking its length! :D
    var modifiedTime = (time + "").length > 1 ? time : "0" + time + "";
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

// dropdown opening
dropdownOpeners.forEach(function (opener, index) {
  opener.addEventListener("click", function (e) {
    this.classList.toggle("opener-active");
    mobileDropdowns[index].classList.toggle(
      "mobile-dropdown-nav-active-" + (index + 1)
    );
  });
});

// making header sticky on scroll
window.addEventListener("scroll", function (e) {
  if (window.innerWidth > 980) {
    header.classList.toggle("sticky-head", window.scrollY > 0);
  }
});
