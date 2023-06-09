const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlide = 0;

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const carouImg1 = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  carouImg1.src = slides[index].image;
  carouImg1.alt = slides[index].tagLine;
  tagLine.innerHTML = slides[index].tagLine;

  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

showSlide(currentSlide);

arrowLeft.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

arrowRight.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
