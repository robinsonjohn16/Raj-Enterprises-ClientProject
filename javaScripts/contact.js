//* PreLoader
let loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// DropDown

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
gsap.from(".call-box", {
  // y: -10,
  scale: 0.9,
  // rotation: 250,
  duration: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".call-box",
    start: "top 90%",
    // end: "-=500",
    scrub: true,
    // toggleActions: "restart none none none",
  },
});

gsap.from(".message-box", {
  // y: -10,
  scale: 0.9,
  // rotation: 250,
  duration: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".message-box",
    start: "top 90%",
    // end: "-=500",
    scrub: true,
    // toggleActions: "restart none none none",
  },
});

gsap.from(".location-box", {
  // y: -10,
  scale: 0.9,
  // rotation: 250,
  duration: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".location-box",
    start: "top 90%",
    // end: "-=500",
    scrub: true,
    // toggleActions: "restart none none none",
  },
});

gsap.from(".group-boxes", {
  // y: -10,
  scale: 0.9,
  // rotation: 250,
  duration: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".group-boxes",
    start: "top 90%",
    // end: "-=500",
    scrub: true,
    // toggleActions: "restart none none none",
  },
});

gsap.from("iframe", {
  // y: -10,
  scale: 0.9,
  // rotation: 250,
  duration: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: "iframe",
    start: "top 90%",
    // end: "-=500",
    scrub: true,
    // toggleActions: "restart none none none",
  },
});
