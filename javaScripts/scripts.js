//* PreLoader
let loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

var swiper = new Swiper(".mySwiper1", {
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
  keyboard: {
    enabled: true,
  },
  autoHeight: true,
  lazyLoading: true,
});
document.querySelector("#download-id").addEventListener("click", (e) => {
  let readConent = document.querySelector("#download-id").textContent;

  if (readConent == "Show More") {
    let readmore = document.querySelector(".readMore");
    readmore.classList.remove("#readMore");
    readmore.classList.add("newReadMore");
    document.querySelector("#download-id").textContent = "Show Less";
    animate_products();
  } else {
    let readmore = document.querySelector(".readMore");
    readmore.classList.add("#readMore");
    readmore.classList.remove("newReadMore");
    document.querySelector("#download-id").textContent = "Show More";
  }
});

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
  // getBoundingClientRect() {
  //   return {
  //     top: 0,
  //     left: 0,
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };
  // },
  pinType: document.querySelector("body").style.transform
    ? "transform"
    : "fixed",
});

(function animate_products() {
  var sections = gsap.utils.toArray(".product");
  sections.forEach((section) => {
    gsap.from(section, {
      scale: 0.85,
      // rotation: 250,
      duration: 0.4,
      opacity: 1,
      scrollTrigger: {
        // markers: true,
        trigger: section,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        // toggleActions: "restart none none none",
      },
    });
  });
})();

gsap.from(".clientRight", {
  scale: 0.8,
  duration: 1,
  scrollTrigger: {
    trigger: ".clientRight",
    scrub: 2,
    scroller: "body",
    start: "top 90%",
  },
});

gsap.from(".subHeading", {
  // y: -10,
  scale: 0.94,
  // rotation: 250,
  duration: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".subHeading",
    scroller: "body",
    start: "top 70%",
    // end: "-=500",
    scrub: true,
    // toggleActions: "restart none none none",
  },
});
gsap.from(".heading", {
  y: -50,
  scale: 0.95,
  // rotation: 250,
  duration: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".heading",
    scroller: "body",
    start: "top 80%",
    // end: "-=500",
    scrub: true,
    // toggleActions: "restart none none none",
  },
});
