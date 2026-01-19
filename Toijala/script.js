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
