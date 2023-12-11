let loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const change = (src) => {
  document.getElementById("main").src = src;
};

// //* Locomotive Scroll
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true,
// });
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("body").style.transform
    ? "transform"
    : "fixed",
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

// gsap.from(".product", {
//   scale: 0.9,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".product",
//     scrub: 2,
//     scroller: "body",
//     markers: true,
//     // start: "bottom 50%",
//     // end: "top 60%",
//   },
// });
var sections = gsap.utils.toArray(".product");
sections.forEach((section) => {
  gsap.from(section, {
    // y: -10,
    scale: 0.8,
    // rotation: 250,
    duration: 0.4,
    opacity: 1,
    scrollTrigger: {
      trigger: section,
      // start: "top 90%",
      // end: "-=500",
      scrub: true,
      toggleActions: "restart none none none",
    },
  });
});

