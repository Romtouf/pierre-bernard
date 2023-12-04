const slides = [
  {
    image: "./assets/img/manipulation-cou.webp",
  },
  {
    image: "./assets/img/reflexe-voute.webp",
  },
  {
    image: "./assets/img/reflexe-paume.webp",
  },
  {
    image: "./assets/img/manipulation-genou.webp",
  },
  {
    image: "./assets/img/manipulation-pied.webp",
  },
  {
    image: "./assets/img/manipulation-foot.webp",
  },
];

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let bannerImage = document.querySelector(".banner-img");

let affichageSlide = 0;

arrowLeft.addEventListener("click", () => {
  bannerContenu();
  bannerBoucle(-1);
});
arrowRight.addEventListener("click", () => {
  bannerContenu();
  bannerBoucle(1);
});

function bannerContenu() {
  bannerImage.src = slides[affichageSlide].image;
}

function bannerBoucle(sens) {
  affichageSlide = affichageSlide + sens;
  if (affichageSlide > slides.length - 1) {
    affichageSlide = 0;
  }
  if (affichageSlide < 0) {
    affichageSlide = slides.length - 1;
  }
}
