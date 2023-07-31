("use strict");

import { animate, timeline, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";

// Animations

const prop = {
  duration: 1000, //miliseconds rather seconds
  iterations: 1, // rather than infinite
  direction: "alternate",
  easing: "ease-in-out",
  //   composite: "add",
};

const fade = [{ opacity: "0" }, { opacity: "100" }];
const up = [{ transform: "translateY(10rem)" }, { transform: "translateY(0rem)" }];
const down = [{ transform: "translateY(-10rem)" }, { transform: "translateY(0rem)" }];
const scale = [{ scale: "0%" }, { scale: "100%" }];
const left = [{ transform: "translateX(-10rem)" }, { transform: "translateX(0rem)" }];
const right = [{ transform: "translateX(10rem)" }, { transform: "translateX(0rem)" }];

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("loaded and executed function");

  const headerPicRight = document.querySelector(".header_graphics").animate(right, prop);
  const headerTextLeft = document.querySelector(".header_text").animate(left, prop);
  const logoScale = document.querySelector(".logo").animate(scale, prop);
  const navUlFade = document.querySelector("nav ul").animate(scale, prop);
}

//Motion One

//Timeline

const target = document.querySelector("#portfolio");

console.log(target);

const sequencePortfolio = [
  [".number", { y: [-120, 0] }, { duration: 1, easing: [0.22, 0.03, 0.26, 1] }],
  [".thumb", { backgroundPosition: "top" }, { at: "<", duration: 1, easing: [0.22, 0.03, 0.26, 1] }],
]; // Sequence ends

//  Scroll
scroll(
  timeline(sequencePortfolio, { target: target, duration: 2 })
  // function () {
  //   init();
  // }
  // animate("article", { x: [-100, 0] }, { delay: stagger(0.3), duration: 0.5, easing: [0.22, 0.03, 0.26, 1] }) //animate ends
);

//*******************************************************

// Typewrite

document.addEventListener("DOMContentLoaded", init);
let str, newStr;
let i = 0;

function init() {
  str = document.querySelector("#typewriter").textContent;
  newStr = document.createElement("h1");
  newStr.classList.add("typewritten");
  newStr.textContent = "";
  document.querySelector("#parallax .container div").appendChild(newStr);
  if (str) {
    loop();
  } else {
    return;
  }
}
// function activateAudio() {}
function loop() {
  //find character
  let curChar = str[i];
  //add charater to main string
  newStr.innerHTML += curChar;
  //iterator++
  i++;
  //exit case
  if (i < str.length) {
    setTimeout(loop, Math.floor(Math.random() * 10) + 100);
  } else {
    i = 0;
    newStr.innerHTML += "<br />";
    // typelastkey.play();
  }
}

//*******************************************************

//Dark / light theme toogle

let theme = localStorage.getItem("data-theme");
const checkbox = document.getElementById("switch");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
  console.log("I give you dark");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
  console.log("I give you light");
};

if (theme === "dark") {
  changeThemeToDark();
}

checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

// Menu Mobile

document.querySelector(".menu").addEventListener("click", openMenu);

function openMenu() {
  const menu = document.querySelector("#mobile");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    // document.querySelector(".menu").textContent = "MENU";
  } else {
    menu.style.display = "flex";
    // document.querySelector(".menu").textContent = "CLOSE";
  }
}
