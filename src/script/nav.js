var hamburger = document.getElementById("hamburger");
var navbar = document.getElementById("mob-nav");

hamburger.addEventListener("click", function () {
  if (navbar.style.display === "none") {
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";
    hamburger.textContent = "X";
  } else {
    navbar.style.display = "none";
    hamburger.textContent = "☰";
  }
});
