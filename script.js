// ---------------------------------------------
// RUSTIC HERO IMAGE ROTATOR (Smooth Fade-In)
// ---------------------------------------------

const heroImages = [
  "photos/hero/hero1.jpg",
  "photos/hero/hero2.jpg",
  "photos/hero/hero3.jpg",
  "photos/hero/hero4.jpg",
  "photos/hero/hero5.jpg",
  "photos/hero/herotray1.jpg",
  "photos/hero/prosciuttodiparma.jpg",
  "photos/hero/wassup.jpg"
];

let currentHero = 0;
const heroElement = document.querySelector(".hero");

// Preload images for smooth transitions
heroImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Apply first image immediately
heroElement.style.backgroundImage = `url('${heroImages[0]}')`;
heroElement.classList.add("fade-in");

// Rotate images with soft fade
setInterval(() => {
  currentHero = (currentHero + 1) % heroImages.length;

  heroElement.classList.remove("fade-in");

  setTimeout(() => {
    heroElement.style.backgroundImage = `url('${heroImages[currentHero]}')`;
    heroElement.classList.add("fade-in");
  }, 300);

}, 9000);
