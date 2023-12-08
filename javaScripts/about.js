const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 50,
  autoHeight: true,
  centeredSlides: true,
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
});

//* Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
});

//* Preloader
let loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
