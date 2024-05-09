const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

let index = 0;
const leftArrowListener = document.querySelector(".arrow_left");
const rightArrowListener = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const slideLength = slides.length;

function listenerArrowLeft() {
  leftArrowListener.addEventListener("click", () => {
    const dotMove = document.querySelectorAll(".dots .dot");
    dotMove[index].classList.remove("dot_selected");
    const activeSlide = document.querySelectorAll(".slider-content");
    activeSlide[index].classList.remove("active--slide");
    index--;
    if (index == -1) {
      index = slideLength - 1;
    }
    dotMove[index].classList.add("dot_selected");
    activeSlide[index].classList.add("active--slide");
  });
}
listenerArrowLeft();

function listenerArrowRight() {
  rightArrowListener.addEventListener("click", () => {
    const dotMove = document.querySelectorAll(".dots .dot");
    dotMove[index].classList.remove("dot_selected");
    const activeSlide = document.querySelectorAll(".slider-content");
    activeSlide[index].classList.remove("active--slide");
    index++;
    if (index > slideLength - 1) {
      index = 0;
    }
    dotMove[index].classList.add("dot_selected");
    activeSlide[index].classList.add("active--slide");
    const textChange = document.querySelectorAll(".slider-content p");
    textChange[index].innerHTML = slides[index].tagLine;
  });
}
listenerArrowRight();

function dotLine() {
  for (let i = 0; i < slideLength; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}
dotLine();
