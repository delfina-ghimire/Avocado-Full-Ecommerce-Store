const hamburger = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

hamburger.addEventListener("click", function () {
  navbar.classList.add("show-navbar");
});

if (close) {
  close.addEventListener("click", function () {
    navbar.classList.remove("show-navbar");
  });
}
