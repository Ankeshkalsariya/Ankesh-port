// =========================
// MOBILE NAV MENU TOGGLE
// =========================
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// =========================
// MODAL PROJECT VIEWER
// =========================
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close");

const viewBtns = document.querySelectorAll(".view-btn");

viewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.closest(".card").querySelector("img").src;
    modal.style.display = "block";
    modalImg.src = imgSrc;
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// =========================
// SCROLL REVEAL
// =========================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load

// =========================
// SMOOTH SCROLLING (optional)
// =========================
const navLinks = document.querySelectorAll("nav a, .mobile-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth",
        });
      }
      mobileMenu.classList.remove("active"); // close menu after click
    }
  });
});

