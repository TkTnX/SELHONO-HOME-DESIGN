const headerBurgerBtn = document.querySelector("#headerBurgerBtn");
const headerBurger = document.querySelector("#headerBurgerMenu");
const bodyLock = document.body;
// Кнопка для вызова burger menu

headerBurgerBtn.addEventListener("click", () => {
  headerBurger.classList.toggle("header__burger-active");
  bodyLock.classList.toggle("lock");
});
