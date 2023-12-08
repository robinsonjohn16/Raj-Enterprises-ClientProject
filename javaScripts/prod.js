let loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const change = (src) => {
  document.getElementById("main").src = src;
};

//* Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
});

// DropDown JS
const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".nav-dropdown-mobile");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
