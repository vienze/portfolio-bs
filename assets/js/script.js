// add background in navbar if scrolled
const navbar = document.querySelector(".navbar");
window.onscroll = () =>
  window.scrollY > 0
    ? navbar.classList.add("scrolled")
    : navbar.classList.remove("scrolled");

// typed js home section
var typed = new Typed("#typed", {
  strings: ["Frontend Developer", "Canva Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 200,
  startDelay: 100,
  fadeOut: false,
  loop: true,
});
