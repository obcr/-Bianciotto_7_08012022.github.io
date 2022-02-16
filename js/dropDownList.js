// button open or closed
const ingredientIconDown = document.querySelector(".ingredient__iconDown");
const appareilIconDown = document.querySelector(".appareil__iconDown");
const ustensileIconDown = document.querySelector(".ustensile__iconDown");
const ingredientIconUp = document.querySelector(".ingredient__iconUp");
const appareilIconUp = document.querySelector(".appareil__iconUp");
const ustensileIconUp = document.querySelector(".ustensile__iconUp");
const btnBlue = document.querySelector(".btnBlue");
const btnGreen = document.querySelector(".btnGreen");
const btnRed = document.querySelector(".btnRed");
const btnBlueOpen = document.querySelector(".btnBlueOpen");
const btnGreenOpen = document.querySelector(".btnGreenOpen");
const btnRedOpen = document.querySelector(".btnRedOpen");

ingredientIconDown.addEventListener("click", () => {
  btnBlue.style.display = "none";
  btnBlueOpen.style.display = "block";
});
appareilIconDown.addEventListener("click", () => {
  btnGreen.style.display = "none";
  btnGreenOpen.style.display = "block";
});
ustensileIconDown.addEventListener("click", () => {
  btnRed.style.display = "none";
  btnRedOpen.style.display = "block";
});
ingredientIconUp.addEventListener("click", () => {
  btnBlueOpen.style.display = "none";
  btnBlue.style.display = "flex";
});
appareilIconUp.addEventListener("click", () => {
  btnGreenOpen.style.display = "none";
  btnGreen.style.display = "flex";
});
ustensileIconUp.addEventListener("click", () => {
  btnRedOpen.style.display = "none";
  btnRed.style.display = "flex";
});

