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
      delay: 2000,
      disableOnInteraction: false,
   },

   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   lazyLoading: true,
});

//* Preloader
let loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
   loader.style.display = "none";
});

// Mobile DropDown
const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".nav-dropdown-mobile");
toggleBtn.onclick = function () {
   dropDowm.classList.toggle("open");
   const isOpen = dropDowm.classList.contains("open");
   toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// //* Locomotive Scroll
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true,
// });

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
   el: document.querySelector("body"),
   smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("body", {
   scrollTop(value) {
      return arguments.length
         ? locoScroll.scrollTo(value, 0, 0)
         : locoScroll.scroll.instance.scroll.y;
   },
   getBoundingClientRect() {
      return {
         top: 0,
         left: 0,
         width: window.innerWidth,
         height: window.innerHeight,
      };
   },
   pinType: document.querySelector("body").style.transform
      ? "transform"
      : "fixed",
});

gsap.from(".record-sections", {
   scale: 0.95,
   duration: 1,
   scrollTrigger: {
      trigger: ".record-sections",
      scroller: "body",
      onEnter: test,
      scrub: 2,
      // markers: true,
      start: "top 90%",
      // end: "top 60%",
   },
});
gsap.from(".right-div1 img", {
   scale: 0.9,
   duration: 1,
   scrollTrigger: {
      trigger: ".right-div1 img",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "top 80%",
   },
});

let heading_title = gsap.utils.toArray(".heading-title");
heading_title.forEach((section) => {
   gsap.from(section, {
      y: -10,
      scale: 0.9,
      // rotation: 250,
      duration: 0.4,
      opacity: 1,
      scrollTrigger: {
         trigger: section,
         start: "top 90%",
         // end: "-=500",
         scrub: true,
         // toggleActions: "restart none none none",
      },
   });
});
let content = gsap.utils.toArray(".content");
content.forEach((section) => {
   gsap.from(section, {
      scale: 0.95,
      // rotation: 250,
      duration: 0.4,
      opacity: 1,
      scrollTrigger: {
         trigger: section,
         start: "top 90%",
         // end: "-=500",
         scrub: true,
         // toggleActions: "restart none none none",
      },
   });
});

function test() {
   // Counter
   let valueDisplays = document.querySelectorAll(".record-heading");
   let interval = 2000;
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
}
