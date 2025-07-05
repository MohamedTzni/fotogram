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
