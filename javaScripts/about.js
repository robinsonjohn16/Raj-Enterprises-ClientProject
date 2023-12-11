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

// Counter
let valueDisplays = document.querySelectorAll(".record-heading");
let interval = 3000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
