var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  autoHeight: true,
  lazyLoading: true,
});

const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".nav-dropdown-mobile");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// // Gsap and Scroll Trigger Codes
// let timeLine = gsap.timeline();
// timeLine.from("header h1", {
//   y: -30,
//   duration: 0.8,
//   delay: 0.5,
// });

// gsap.from("main .product", {
//   y: 30,
//   scale: 0.98,
//   opacity: 0,
//   duration: 1,
//   stager: 0.9,
//   scrollTrigger: {
//     trigger: "main .product",
//     scroller: "body",
//     markers: true,
//     start: "top 80%",
//   },
// });

//* Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
});

let loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
