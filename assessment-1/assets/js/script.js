const navToggle = document.querySelector(".nav-toggle");

// const links = document.querySelector(".nav-list");
// const social = document.querySelector(".right-btn");
// navToggle.addEventListener("click", function () {
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
//   social.classList.toggle("show");
// });

const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

// Add "show-sidebar" class from Sidebar
navToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

// Remove "show-sidebar" class from Sidebar
closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});

// Banner slider
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
