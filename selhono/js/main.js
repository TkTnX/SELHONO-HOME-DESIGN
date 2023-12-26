const headerBurgerBtn = document.querySelector("#headerBurgerBtn");
const headerBurger = document.querySelector("#headerBurgerMenu");
const bodyLock = document.body;
// Кнопка для вызова burger menu

headerBurgerBtn.addEventListener("click", () => {
  headerBurger.classList.toggle("header__burger-active");
  bodyLock.classList.toggle("lock");
});

// * Design Slider

const swiper = new Swiper(".design__swiper", {
  // Optional parameters
  spaceBetween: 17,
  loop: true,
  slidesPerView: 1,

  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
