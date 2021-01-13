let btn = document.getElementById("my-btn");
let div = document.getElementById("hidden-div");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
let index = 0;

btn.addEventListener("click", () => {
  if (div.style.display != "flex") {
    div.style.display = "flex";
    btn.innerHTML = "Hide";
  } else {
    div.style.display = "none";
    btn.innerHTML = "Show All Categories";
  }
});

function display(ind) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[ind].style.display = "flex";
}

function nextSlide() {
  console.log("next");
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  console.log("prev");
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
