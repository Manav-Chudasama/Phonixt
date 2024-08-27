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

function swiper1() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    //freeMode: true, // Enable non-snapping, free mode

    speed: 2000, // Transition speed in milliseconds (e.g., 3000 = 3 seconds)

    loop: true, //
    grabCursor: true,
    autoplay: {
      delay: 0, // No delay between transitions
      disableOnInteraction: false, // Continue autoplay after user interaction (default is true)
    },
    on: {
      init: function () {
        const swiper = this;
        swiper.el.addEventListener("mouseenter", () => {
          swiper.autoplay.stop();
        });
        swiper.el.addEventListener("mouseleave", () => {
          swiper.autoplay.start();
        });
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  if (window.matchMedia("(max-width: 600px)").matches) {
    swiper.params.slidesPerView = 1.4;
    swiper.params.spaceBetween = 30;
    speed: 1000, // Transition speed in milliseconds (e.g., 3000 = 3 seconds)
      // Update other Swiper options for mobile view
      swiper.update(); // Re-initialize Swiper with updated options
  }
}

swiper1();

const swiper2 = () => {
  var swiper = new Swiper(".homeSlider", {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000, // No delay between transitions
      disableOnInteraction: false, // Continue autoplay after user interaction (default is true)
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

swiper2();

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

// highlight nav items on scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".scroll-to-top i ").style.color = "var(--red)";
  } else {
    document.querySelector(".scroll-to-top i ").style.color = "black";
  }
});

//Product js

var popupViews = document.querySelectorAll(".popup-view");
console.log(popupViews);
var popupBtns = document.querySelectorAll(".more-det");
console.log(popupBtns);
var closeBtns = document.querySelectorAll(".close-btn");

//javascript for quick view button
var popup = function (popupClick) {
  console.log(popupClick);
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

//secure script
