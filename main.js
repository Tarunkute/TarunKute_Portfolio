var typed = new Typed(".text", {
  strings: ["Frontend Developer", "SQL Developer", "Java Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//circle skills//////////////////////////////////////////////////////

const circles = document.querySelectorAll(".circle");

circles.forEach((elem) => {
  let dots = parseInt(elem.getAttribute("data-dots"));
  let marked = parseInt(elem.getAttribute("data-percent"));
  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }

  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// mix it up portfolio section////////////////////////////////////////////////
var mixer = mixitup(".portfolio-gallery");



// active menu////////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
  let len = sections.length;

  while (--len >= 0 && window.scrollY + 97 < sections[len].offsetTop) {}

  menuLi.forEach(link => link.classList.remove("active"));
  if (menuLi[len]) {
    menuLi[len].classList.add("active");
  }
}

// Call once on load
activeMenu();

// Update on scroll
window.addEventListener("scroll", activeMenu);

// sticky------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
})

// Toggle menu icon
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
})

window.addEventListener("scroll", () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("open");
})