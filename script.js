window.addEventListener("DOMContentLoaded", () => {});
/* 1) Bildpfade */
const pictures = [
  "img/45-367x267.jpg",
  "img/48-367x267.jpg",
  "img/111-367x267.jpg",
  "img/155-367x267.jpg",
  "img/162-367x267.jpg",
  "img/175-367x267.jpg",
  "img/180-367x267.jpg",
  "img/184-367x267.jpg",
  "img/212-367x267.jpg",
  "img/214-367x267.jpg",
];

/* 2) DOM-Elemente */
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const bigImg = document.getElementById("lightboxImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");
/* 3) Thumbnails erzeugen */
for (let i = 0; i < pictures.length; i++) {
  const thumb = document.createElement("img");
  thumb.src = pictures[i];
  thumb.alt = `Bild ${i + 1}`;
  gallery.appendChild(thumb);

  // Klick-Handler pro Thumbnail
  ((index) => {
    thumb.addEventListener("click", () => {
      current = index;
      openLightbox();
    });
  })(i);
}
/* 4) Lightbox-Funktionen */
let current = 0;

function openLightbox() {
  bigImg.src = pictures[current];
  bigImg.alt = `Bild ${current + 1}`;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function changeImage(step) {
  current += step;
  if (current < 0) current = pictures.length - 1; // Rückwärts ans Ende
  if (current >= pictures.length) current = 0; // Vorwärts zum Anfang
  bigImg.src = pictures[current];
  bigImg.alt = `Bild ${current + 1}`;
}
/* 5) Event-Listener */
prevBtn.addEventListener("click", () => changeImage(-1));
nextBtn.addEventListener("click", () => changeImage(1));
closeBtn.addEventListener("click", closeLightbox);

// Klick auf das halbtransparente Overlay schließt den Dialog
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
