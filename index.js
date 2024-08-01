const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const hamburgerList = document.querySelector(".hamburger_list");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  hamburgerMenu.classList.toggle("is-active");
});

hamburgerMenu.addEventListener("click", ({ target }) => {
  if (target.firstChild.textContent.trim() === "Услуги") {
    target.classList.toggle("is-active");
  }
  if (target.firstChild.textContent.trim() === "Туры") {
    target.classList.toggle("is-active");
  }
});
