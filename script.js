// ---------------------------------------------
// HERO IMAGE ROTATOR (Smooth Fade)
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

// Preload images
heroImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Apply first image
heroElement.style.backgroundImage = `url('${heroImages[0]}')`;
heroElement.classList.add("fade-in");

// Rotate images
setInterval(() => {
  currentHero = (currentHero + 1) % heroImages.length;

  heroElement.classList.remove("fade-in");

  setTimeout(() => {
    heroElement.style.backgroundImage = `url('${heroImages[currentHero]}')`;
    heroElement.classList.add("fade-in");
  }, 300);

}, 9000);


// ---------------------------------------------
// ACCORDION MENU
// ---------------------------------------------
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");

    if (content.classList.contains("open")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  });
});


// ---------------------------------------------
// MOBILE NAV
// ---------------------------------------------
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
