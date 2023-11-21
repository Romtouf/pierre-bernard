const slides = [
  {
    image: "./assets/img/seance-interieur.webp",
  },
  {
    image: "./assets/img/bureau.webp",
  },
  {
    image: "./assets/img/seance-exterieur.webp",
  },
  {
    image: "./assets/img/table-massage.webp",
  },
];

// Récupérer les éléments dans le HTML
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let bannerImage = document.querySelector(".banner-img");
// let bannerDots = document.querySelectorAll(".dot");
// let bannerSelected = document.querySelector(".dot_selected");

// Compteur pour le slide
let affichageSlide = 0;

// Au clic, faire défiler le carrousel
arrowLeft.addEventListener("click", () => {
  // alert("Ok pour la flèche de gauche");

  bannerContenu();
  // dotChangeOnClick();
  bannerBoucle(-1);
});
arrowRight.addEventListener("click", () => {
  // alert("Ok pour la flèche de droite");

  bannerContenu();
  // dotChangeOnClick();
  bannerBoucle(1);
});

// Changer le point affiché au clic
// function dotChangeOnClick() {
//   bannerDots.forEach((bullets, i) => {
//     bullets.classList.remove("dot_selected");

//     if (i === affichageSlide) {
//       bullets.classList.add("dot_selected");
//     }
//   });
// }

// Intégrer le contenu du slider
function bannerContenu() {
  bannerImage.src = slides[affichageSlide].image;
}

// Sens de défilement du slide selon la flèche cliquée
function bannerBoucle(sens) {
  affichageSlide = affichageSlide + sens;
  if (affichageSlide > slides.length - 1) {
    affichageSlide = 0;
  }
  if (affichageSlide < 0) {
    affichageSlide = slides.length - 1;
  }
}
