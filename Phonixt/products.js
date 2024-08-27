(function () {
  const locomotiveScroll = new LocomotiveScroll({
    lerp: 1,
    smooth: true,
  });
})();
const navItems = document.querySelectorAll(".nav-right ul li");

function loadingAnimation() {
  gsap.from(".p1-mid span h2", {
    transform: "skew(0,-10deg)",
    y: -50,
    duration: 1,
  });

  gsap.from(".p1-btm video", {
    opacity: 0,
    x: 100,
    ease: "expo.inOut",
    duration: 1,
  });

  gsap.from("nav .logo", {
    opacity: 0,
    y: -100,
    ease: "sine",
    duration: 1,
  });

  gsap.from("nav ul li", {
    y: -100,

    ease: "back",
    duration: 1,
    stagger: 0.12,
  });
}
loadingAnimation();

function header() {
  let header = document.querySelector("nav");
  let lastscroll = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastscroll < window.scrollY) {
      gsap.to(header, {
        transform: "translate3d(0,-100%,0)",
        ease: "expo.out",
        duration: 1,
      });
    } else {
      gsap.to(header, {
        transform: "translate3d(0,0%,0)",
        ease: "expo.out",
        duration: 1,
      });
    }
    lastscroll = window.scrollY;
  });
}
header();

// Function to smoothly scroll to a target element with an optional Y offset
function scrollToTarget(target, offset = 0) {
  const yPosition =
    target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({
    top: yPosition,
    behavior: "smooth",
  });
}

// Close menu function
function closeMenu() {
  gsap.to(".burger-contents", {
    clipPath: "inset(0 0 100% 0)",
    ease: "power3.out",
    duration: 1,
    onComplete: () => {
      document.body.style.overflow = "auto"; // Enable scrolling after closing the menu
    },
  });
}

// Event listener for menu item clicks
document.querySelectorAll(".burger-mid nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      closeMenu(); // Close the menu
      scrollToTarget(targetSection, 50); // Smoothly scroll to the target section with a 50px offset
    }
  });
});

// Event listener for opening the menu
document.querySelector(".open").addEventListener("click", () => {
  document.body.style.overflow = "hidden"; // Disable scrolling

  gsap.to(".burger-contents", {
    clipPath: "inset(0 0 0 0)",
    ease: "expo",
  });

  // Your menu opening animations here
});

let tl = gsap.timeline();
document.querySelector(".open").addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  gsap.to(".burger-contents", {
    clipPath: "inset(0 0 0 0 )",
    ease: "expo",
  });

  tl.from(".burger-mid nav a", {
    y: "200%",
    stagger: 0.1,
    opacity: 0,
    duration: 1,
    ease: "back",
    delay: 0.5,
  });

  tl.from(".burger-btm a", {
    x: "20%",
    stagger: 0.1,
    opacity: 0,
    duration: 1,
    ease: "expo",
    delay: -0.5,
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.body.style.overflow = "visible";
  gsap.to(".burger-contents", {
    clipPath: "inset(0 0 100% 0 )",
    ease: "power3.out",
    duration: 1,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll(".nav-right ul li a");
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute("href"); // Get target section id
      const targetSection = document.querySelector(targetId); // Get target section element

      if (targetSection) {
        // Calculate offset from the top of the page
        const offsetTop = targetSection.offsetTop;

        // Smooth scroll animation
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

document.querySelector(".scroll-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const sections = document.getElementsByName("section");
const navLi = document.querySelectorAll(".nav-right ul li");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".scroll-to-top i ").style.color = "var(--red)";
  } else {
    document.querySelector(".scroll-to-top i ").style.color = "black";
  }
});

//Product js

var popupViews = document.querySelectorAll(".popup-view");
var popupBtns = document.querySelectorAll(".product-card");
var closeBtns = document.querySelectorAll(".close-btn");

//javascript for quick view button
var popup = function (popupClick) {
  popupViews[popupClick].classList.add("active");
};

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove("active");
    });
  });
});

gsap.from(".footer-top", {
  opacity: 0,
  ease: "sine",
  scrollTrigger: {
    scroller: "body",
    trigger: "footer",
    start: "top 50%",
    end: "top 60%",
    scrub: 5,
  },
});
