const coffee = document.querySelector(".coffee");
const coffeeList = document.querySelector(".coffee__list");
const combo = document.querySelector(".combo");
const comboList = document.querySelector(".combo__list");

coffee.children[1].addEventListener("click", function () {
  if (!this.classList.contains("none")) {
    coffeeList.classList.toggle("right");
    coffeeList.classList.toggle("left");
    this.classList.toggle("none");
    coffee.children[0].classList.toggle("none");
  }
});
coffee.children[0].addEventListener("click", function () {
  if (!this.classList.contains("none")) {
    coffeeList.classList.toggle("right");
    coffeeList.classList.toggle("left");
    this.classList.toggle("none");
    coffee.children[1].classList.toggle("none");
  }
});

combo.children[1].addEventListener("click", function () {
  if (!this.classList.contains("none")) {
    comboList.classList.toggle("right");
    comboList.classList.toggle("left");
    this.classList.toggle("none");
    combo.children[0].classList.toggle("none");
  }
});
combo.children[0].addEventListener("click", function () {
  if (!this.classList.contains("none")) {
    comboList.classList.toggle("right");
    comboList.classList.toggle("left");
    this.classList.toggle("none");
    combo.children[1].classList.toggle("none");
  }
});
