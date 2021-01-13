let btn = document.getElementById("my-btn");
let div = document.getElementById("hidden-div");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelector(".slide");
let index = 0;
btn.addEventListener("click", () => {
  if (div.style.display == "none") {
    div.style.display = "flex";
    btn.innerHTML = "Hide";
  } else {
    div.style.display = "none";
    btn.innerHTML = "Show All Categories";
  }
});
