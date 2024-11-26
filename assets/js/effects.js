// variables
const accordionBtnToggle = document.querySelectorAll(".accordion-item");

// Adding event listener to the accordion toggle button
for (i of accordionBtnToggle) {
  i.addEventListener("click", accordionToggleFunction);
}

// function to open an accordion
function accordionToggleFunction() {
  this.nextElementSibling.classList.toggle("accordion-active");
  this.children[1].classList.toggle("toggleIcon");
}