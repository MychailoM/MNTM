const openMobileMenu = document.querySelector(".open__mobile-menu");
const closeMobileMenu = document.querySelector(".close__mobile-menu");
const mobileMenu = document.querySelector(".mobile__menu");
const mobileLinks = document.querySelectorAll(".mobile__menu-nav-link");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.classList.add("menu-open");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
});

document.querySelectorAll(".mobile__menu-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
