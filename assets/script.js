const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0
let arr = undefined
const leftArrowListener = document.querySelector('.arrow_left');
const rightArrowListener = document.querySelector('.arrow_right');
const dots = document.querySelector(".dots");
const slideLength = slides.length;

function dispIdx () {
  if (arr === 'l'){
    console.log('index',index, 'click left --')
  } else {
    console.log('index',index, 'click right ++')
  }
}
console.log('index', index);






function listenerArrowLeft () {
  leftArrowListener.addEventListener("click", () => {
    arr = 'l'
    index--
    if (index == -1) {
      index = slideLength -1
    }


    dispIdx();
  });
}
listenerArrowLeft();




function listenerArrowRight () {
  rightArrowListener.addEventListener("click", () => {
    arr = 0
    index++
    if (index > slideLength -1) {
      index = 0
    }
    

    dispIdx();
  });
}
listenerArrowRight();


/*---------------------------------------------------------------------------------------------*/






function dotLine () {

  for (let i = 0; i < slideLength; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected")
    }
  }

}
dotLine()



