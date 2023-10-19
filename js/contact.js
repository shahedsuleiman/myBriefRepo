// navbar start
// navbar start
let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let nav = document.querySelector("nav");
let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBtn.classList.add("active");
  menuToggle.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
  menuToggle.classList.remove("hide");
  nav.classList.remove("open");
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
});
// navbar end
// navbar end






const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false; // Prevent form submission
  }

  return true; // Allow form submission
}
