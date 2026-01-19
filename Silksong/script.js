// Track the previous scroll position
var lastScrollTop = 0;

// Toggle navbar visibility on scroll
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-60px"; // Hide navbar
  } else {
    navbar.style.top = "0"; // Show navbar
  }

  lastScrollTop = scrollTop;
});

// Toggle mobile menu
function menu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("show")) {
    navLinks.classList.remove("show");
  } else {
    navLinks.classList.add("show");
  }
}

// Close menu
window.addEventListener("click", function (e) {
  var nav = document.getElementById("navLinks");
  var button = document.querySelector(".menu");

  if (!nav.contains(e.target) && !button.contains(e.target)) {
    nav.classList.remove("show");
  }
});
