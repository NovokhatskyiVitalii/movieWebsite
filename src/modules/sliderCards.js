const leftBtn = document.querySelector(".bi-chevron-left"),
  rightBtn = document.querySelector(".bi-chevron-right"),
  cards = document.querySelector(".cards");

leftBtn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});

rightBtn.addEventListener("click", () => {
  cards.scrollLeft += 140;
});
