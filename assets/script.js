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
// information pour la mise à jour du contenu HTML

let index = 0;
// initialisation de la variable d'index


const slideLength = slides.length;
// récuperation de la longueur du tableau slide


const leftArrowListener = document.querySelector(".arrow_left");
const rightArrowListener = document.querySelector(".arrow_right");
// récupération des flèches


const dots = document.querySelector(".dots");
// récupération de la balise dots


const textChange = document.querySelector(".slider-content > p");
const imgElement = document.querySelector(".banner-img");
// récupération des éléments pour l'image et le texte


imgElement.src = './assets/images/slideshow/' + slides[0].image
textChange.innerHTML =  slides[0].tagLine
// mise à jour de l'image et du texte


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
// création des points selon la taille du tableau slides


leftArrowListener.addEventListener("click", () => onArrowClicked('left'));
rightArrowListener.addEventListener("click", () => onArrowClicked('right'));
// ajout d'un event listener aux flèches gauche et droite


function onArrowClicked(arrow) {
  const dotMove = document.querySelectorAll(".dots .dot");
  dotMove[index].classList.remove("dot_selected");

  arrow === 'right' ? index++ : index--

  if (index > slideLength - 1) {
    index = 0;
  } else  if (index == -1) {
    index = slideLength - 1;
  }

  dotMove[index].classList.add("dot_selected");
  imgElement.src = `./assets/images/slideshow/${slides[index].image}`;
  textChange.innerHTML = slides[index].tagLine;
}
// mise à jour de l'image du texte et des points lors du clic sur une flèche

