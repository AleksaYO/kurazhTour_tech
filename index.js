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

let slideIndex = 0;
let indicatorIndex = 0;

const showSlide = (index) => {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  const indicators = document.querySelectorAll(".indicator");

  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  indicators.forEach((ind) => {
    const indicatorIndex = parseInt(ind.dataset.num, 10);
    indicatorIndex - 1 === slideIndex
      ? ind.classList.add("is-active")
      : ind.classList.remove("is-active");
  });

  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
};

showSlide(slideIndex);

const changeSlide = (n) => {
  showSlide(slideIndex + n);
};

setInterval(() => {
  changeSlide(1);
}, 3000);
