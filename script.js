document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Accordion Toggle
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const panel = accordion.nextElementSibling;

      // Close all panels first
      document.querySelectorAll(".panel").forEach((p) => {
        if (p !== panel) p.classList.remove("active");
      });

      // Toggle the clicked panel
      panel.classList.toggle("active");
    });
  });
});
