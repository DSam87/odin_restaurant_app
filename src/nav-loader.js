import { clearPageFunction } from "./page-loader-utils";
import homePageLoader from "./home-page-loader";
import showMenuPage from "./menu-page";
import locationPageLoader from "./location-page-loader";

function createPElement(text) {
  let p = document.createElement("p");
  p.textContent = text;
  return p;
}

function setActiveClass(event) {
  removeActiveClass();

  event.target.classList.forEach((el) => {
    if (el === "nav-item") {
      event.target.firstChild.classList.add("active-page");
    }
  });
  event.target.classList.add("active-page");
}

function setActiveCallback() {
  const navBtns = document.querySelectorAll(".nav-item");
  navBtns.forEach((el) => {
    el.addEventListener("click", setActiveClass);
  });
}

function removeActiveClass() {
  const navBtns = document.querySelectorAll(".nav-item");
  navBtns.forEach((el) => {
    el.firstChild.classList.remove("active-page");
  });
}

export default function loadNav() {
  const contentDiv = document.getElementById("content");

  // create a left container
  const leftNavBarContainer = document.createElement("div");
  leftNavBarContainer.classList.add("left-nav-bar-container");
  leftNavBarContainer.classList.add("nav-bar");

  // create a right container
  const rightNavBarContainer = document.createElement("div");
  rightNavBarContainer.classList.add("right-nav-bar-container");
  rightNavBarContainer.classList.add("nav-bar");

  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  const websiteTitleNavBtn = document.createElement("div");
  websiteTitleNavBtn.classList.add("website-name-container");
  websiteTitleNavBtn.appendChild(createPElement("Odin Restaurant"));
  websiteTitleNavBtn.firstChild.classList.add("website-name");

  const homeNavBtn = document.createElement("div");
  homeNavBtn.classList.add("nav-item");
  homeNavBtn.appendChild(createPElement("Home"));
  homeNavBtn.addEventListener("click", () => {
    clearPageFunction();
    homePageLoader();
  });
  homeNavBtn.firstChild.classList.add("active-page");

  const aboutNavBtn = document.createElement("div");
  aboutNavBtn.classList.add("nav-item");
  aboutNavBtn.appendChild(createPElement("Menu"));
  aboutNavBtn.addEventListener("click", () => {
    clearPageFunction();
    showMenuPage();
  });

  const locationNavBtn = document.createElement("div");
  locationNavBtn.classList.add("nav-item");
  locationNavBtn.appendChild(createPElement("Location"));
  locationNavBtn.addEventListener("click", () => {
    clearPageFunction();
    locationPageLoader();
  });

  leftNavBarContainer.appendChild(websiteTitleNavBtn);
  rightNavBarContainer.appendChild(homeNavBtn);
  rightNavBarContainer.appendChild(aboutNavBtn);
  rightNavBarContainer.appendChild(locationNavBtn);

  navBar.appendChild(leftNavBarContainer);
  navBar.appendChild(rightNavBarContainer);

  contentDiv.appendChild(navBar);
  setActiveCallback();
}
